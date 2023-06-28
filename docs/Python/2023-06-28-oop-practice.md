---
title: Object-Oriented Programming，OOP
description: 因為工作上有些測試機會架在雲端,為了省錢沒有綁定eip,那為了要在每次開機都不用去看新的外部ip然後再改ssh的連線ip,所以程式自動執行以上事情,同時因為管理的過程是適合拿來改成oop風格,所以順便練習oop風格的寫法

image: https://github.com/suyuying.png
authors: suyuying
tags: [Python]
---
## Object-Oriented Programming

物件導向編程（Object-Oriented Programming，OOP）是設計風格,會實作以下幾項

- 物件:把程式組成一個物件,具有屬性跟方法
- 封裝:把程式邏輯封裝,只提供公開介面
- 繼承: 可以繼承其他物件的屬性跟方法
- 多型: 物件可以根據上下文的不同以不同的方式呈現
- 抽象化: 抽象類別跟介面結構,並由物件實現

以上東西文字看了會不太懂,所以我這邊用ec2做舉例.
aws提供一個api,它提供了很多方法去他的server撈資料,今天我要撈某區的ec2,會先建立連接,然後查詢有哪些ec2,然後把資料匯出並配合他的資訊做管控. 以上過程可以用幾個function串起來,像是`connect_api` `check_ec2_info` `start_ec2` `stop_ec2` `reboot_ec2` `get_ec2_public_dns`(這邊只是舉例,不是實際功能).
那用oop來設計就會把建立`check_ec2_info` 查到的ec2,封裝到一個定義有`start_ec2` `stop_ec2` `reboot_ec2` `get_ec2_public_dns`方法的物件,你操作就會變成ec2.start(),stop(),reboot()這樣. 我個人是覺得管理跟理解上更好.

```jsx title="main.py"
from abc import ABC, abstractmethod
import boto3
from typing import Iterable
import argparse

# 規劃VM結構 會適用於所有vm 
class VM(ABC):

    @abstractmethod
    def start_instance(self):
        pass


    @abstractmethod
    def stop_instance(self):
        pass

    @abstractmethod
    def restart_instance(self):
        pass

    @abstractmethod
    def _show_instance_public_dns(self):
        pass

    def create_instance(cls, instance_id, instance_type):
        pass

# for aws vm 示範
class EC2(VM):
    def __init__(self, ec2_client, instance_id, instance_type, instance_state, public_dns_name, tags):
        self.ec2_client = ec2_client
        self.instance_id = instance_id
        self.instance_type = instance_type
        self.instance_state = instance_state
        self.public_dns_name = public_dns_name
        self.tags = tags

    def start_instance(self):
        self.ec2_client.start_instances(InstanceIds=[self.instance_id])
        print(f"{self.tags[0]['Value']}開機了")
        return

    def start_instance_update_ssh_config_too(self, target_host_in_ssh_config: str):
        self.start_instance()
        self._show_instance_public_dns()
        update_result = self._update_ssh_config(target_host=target_host_in_ssh_config)
        if update_result:
            print(f"{self.public_dns_name} change to set {target_host_in_ssh_config} a new dns")
        else:
            print(f"Dont see {target_host_in_ssh_config} in ssh config")
        return

    def stop_instance(self):
        self.ec2_client.stop_instances(InstanceIds=[self.instance_id])
        if self.tags:

            print(f"{self.tags[0]['Value']} is going to stop")
        else:
            print(f"{self.instance_id} is going to stop")
        return

    def restart_instance(self):
        self.ec2_client.reboot_instances(InstanceIds=[self.instance_id])
        if self.tags:
            print(f"{self.tags[0]['Value']} is going to restart")
        else:
            print(f"{self.instance_id} is going to restart")
        return
# 因為是內部使用所以在前面加 _ 這個符號
    def _show_instance_public_dns(self):
        # 等待实例状态变为 "running"
        self.ec2_client.get_waiter('instance_running').wait(InstanceIds=[self.instance_id])

        # 获取实例详细信息
        response = self.ec2_client.describe_instances(InstanceIds=[self.instance_id])

        # 提取公共 DNS 名称
        self.public_dns_name = response['Reservations'][0]['Instances'][0]['PublicDnsName']
        return

    def _update_ssh_config(self, target_host: str):

        config_file = '/Users/suyuying/.ssh/config'  # SSH 配置文件路径

        # 读取配置文件内容
        with open(config_file, 'r') as file:
            lines = file.readlines()

        # 查找目标主机名的行索引,用-1是為了一旦沒有鎖定到目標host,可以方便做if else處理
        target_index = -1
        # 尋找目標Host,並用字串處理確認是否符合
        for i, line in enumerate(lines):
            if line.strip().startswith('Host') and line.strip().split()[1] == target_host:
                # 一但找到就把target index做修改
                target_index = i
                break

        # 更新主机名
        if target_index != -1:
            # 以target_index為基準,處理他的下一行,也就是HostName那一行
            lines[target_index + 1] = f'    HostName {self.public_dns_name}\n'

            # 写入更新后的内容
            with open(config_file, 'w') as file:
                file.writelines(lines)
            print('SSH configuration updated successfully.')
            return True
        else:
            print('Target host not found in SSH configuration.')
            return False


# 使用组合来管理 EC2 实例
class EC2Cluster:
    def __init__(self, instances: Iterable[EC2]):
        self.instances = instances

    def start_all(self):
        for instance in self.instances:
            instance.start_instance()
        return

    def start_all_update_ssh_config(self):
        for instance in self.instances:
            if instance.tags[0]['Value'] == 'ford-pmm-server':
                target_host = "prometheus-server"
                instance.start_instance_update_ssh_config_too(target_host)
            elif instance.tags[0]['Value'] == 'ford-pmm-test':
                target_host = "backend1"
                instance.start_instance_update_ssh_config_too(target_host)
            else:
                print("not matched tags in cloud")
        return

    def stop_all(self):
        for instance in self.instances:
            instance.stop_instance()
        return

#
# def datetime_encoder(obj):
#     if isinstance(obj, datetime):
#         return obj.isoformat()


def get_instances(ec2_client_side):
    response = ec2_client_side.describe_instances()

    instances = []
    for reservation in response['Reservations']:
        for instance in reservation['Instances']:
            instance_id = instance['InstanceId']
            instance_type = instance['InstanceType']
            instance_state = instance['State']['Name']
            instance_public_dns_name = instance.get('PublicDnsName', '')
            instance_tags = instance.get('Tags', [])

            instance_info = {
                'InstanceID': instance_id,
                'InstanceType': instance_type,
                'InstanceState': instance_state,
                'PublicDNSName': instance_public_dns_name,
                'InstanceTags': instance_tags
            }
            print(instance_info)
            if instance_tags:
                instance_info['Tags'] = instance_tags

            ec2_instance = EC2(ec2_client_side,instance_id, instance_type, instance_state, instance_public_dns_name, instance_tags)

            instances.append(ec2_instance)
    return EC2Cluster(instances)


if __name__ == "__main__":

    # 创建 ArgumentParser 对象
    parser = argparse.ArgumentParser(description='EC2 Instances Control')

    # 添加 start 选项
    parser.add_argument('--start', action='store_true', help='Start EC2 instances and update config')

    # 添加 stop 选项
    parser.add_argument('--stop', action='store_true', help='Stop EC2 instances')

    # 解析命令行参数
    args = parser.parse_args()
    ec2_client = boto3.client('ec2', region_name='us-west-1')
    instances_cluster = get_instances(ec2_client_side=ec2_client)
    # 根据选项执行相应操作
    if args.start:
        print('Starting EC2 instances...')
        # 在这里添加启动 EC2 实例的逻辑
        instances_cluster.start_all_update_ssh_config()
    if args.stop:
        print('Stopping EC2 instances...')
        # 在这里添加停止 EC2 实例的逻辑
        instances_cluster.stop_all()

```
