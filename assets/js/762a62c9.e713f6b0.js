"use strict";(self.webpackChunkwebsitev_1=self.webpackChunkwebsitev_1||[]).push([[4281],{61036:t=>{t.exports=JSON.parse('{"label":"AWS","permalink":"/docs/tags/aws","allTagsPath":"/docs/tags","count":7,"items":[{"id":"Aws/2023-3-29-aws-basic-introduction","title":"AWS Basic Introduction","description":"\u8a18\u9304\u7b46\u8a18,Region aws \u57fa\u790e\u8a2d\u65bd\u7684\u4e00\u500b\u55ae\u4f4d\uff0c\u6bcf\u500b\u5340\u57df\u90fd\u662f\u7368\u7acb\u6578\u64da\u4e2d\u5fc3\u7fa4\u96c6\uff0c\u7531\u591a\u500b Availability Zone \u7d44\u6210\uff0c\u6240\u4ee5\u50cf\u65b0\u52a0\u5761\u5340\uff0caws \u76ee\u524d\u5c31 3 \u500b\u53ef\u7528\u5340\u57df\u3002","permalink":"/docs/Aws/2023-3-29-aws-basic-introduction"},{"id":"Aws/2023-04-26-aws-ec2-elb-setting","title":"aws EC2 and ELB setting introduction","description":"\u57fa\u672cEC2\u9023\u5165\u7ba1\u7406,\u5821\u58d8\u6a5f\u8ddfweb server\u8a2d\u5b9a.\u4e26\u4f7f\u7528ELB\u4f5c\u70ba\u53cd\u5411\u4ee3\u7406\u4ee5web server.ELB \u8a2d\u5b9a\u90e8\u5206,\u4e00\u958b\u59cb\u7684 listener \u53ea\u6709\u57fa\u672c\u7684 rule,\u76ee\u524d\u53ea\u6709\u4e00\u689d If (all match)Request is not otherwise routed to target group.\u6b63\u5e38\u4f7f\u7528\u60c5\u6cc1\u6703\u662f,\u4f60\u81ea\u5df1\u7684\u57df\u540d(ex. modontou.don69.store)\u8a2d\u5b9a\u5230\u8a72 ELB,\u518d\u900f\u904e ELB \u4f9d\u64da\u8acb\u6c42\u7684\u8a2d\u5b9a,\u628a\u8acb\u6c42\u8f49\u5230 Target Group.","permalink":"/docs/Aws/2023-04-26-aws-ec2-elb-setting"},{"id":"Aws/2023-03-25-aws-iam-setting","title":"aws iam setting introduction","description":"\u5b98\u65b9\u5efa\u8b70\u5927\u591a\u60c5\u6cc1\u90fd\u6703\u9069\u7528 IAM role\uff0c\u4f7f\u7528 IMA role \u7684\u512a\u9ede\u662f\u4ed6\u662f\u4f7f\u7528\u66ab\u6642\u6027\u6191\u8b49(\u53ef\u8a2d\u5b9a\u5230\u671f\u6642\u9593)\uff0c\u800c IAM \u4f7f\u7528\u8005\u7528\u7684\u90fd\u662f\u9577\u671f\u7684 aws_secret_access_key(\u56e0\u6b64\u5b98\u65b9\u6703\u5efa\u8b70\u5b9a\u6642\u63db\uff0c\u4e0d\u904e\u4e00\u822c\u4f86\u8aaa\u6c92\u4eba\u90a3\u9ebc\u52e4\u52de ZZZ)\u3002","permalink":"/docs/Aws/2023-03-25-aws-iam-setting"},{"id":"Aws/2023-04-11-aws-vpc-setting","title":"aws internet setting introduction","description":"\u57fa\u672c\u4e0a\u7db2\u8def\u90e8\u5206\u6703\u570d\u7e5e\u8457VPC \u8a2d\u5b9a,\u4f9d\u5e8f:\u5efa\u7acb VPC ->\u5efa\u7acb public subnet & private subnet(\u9700\u9023\u7d50 VPC) ->\u5efa\u7acb Internet gateway(\u9700\u9023\u7d50 VPC) ->\u5efa\u7acb NAT gateway(\u9700\u9023\u7d50 subnet,\u914d\u7f6e eip) -> \u5efa\u7acb route table(\u8a2d\u5b9a\u662f\u5426\u9023\u5167\u7db2 local,\u9023\u5916 Igw,NAT gateway,VPN gateway,peering \u7b49) \u4ee5\u53ca\u8981\u7d66\u54ea\u500b subnet \u7528,\u4e00\u500b route table \u53ef\u4ee5\u7d66\u591a\u500b subnet \u7528 -> \u8a2d\u5b9a Security group \u5c0d\u670d\u52d9\u958b\u555f ip and port -> \u7db2\u8def\u5230\u9019\u908a,\u53bb\u8a2d\u5b9a\u670d\u52d9\u56c9\uff01","permalink":"/docs/Aws/2023-04-11-aws-vpc-setting"},{"id":"linux-server/2023-04-11-linux-disk-management","title":"linux disk management command used commonly","description":"\u5728\u7ba1\u7406\u4e0a\u6703\u53bb\u6aa2\u8996\u786c\u789f\u4f7f\u7528\u91cf,\u8cc7\u6599\u593e\u8cc7\u6599\u5927\u5c0f,\u5982\u679c\u639b\u786c\u789f\u8ddf\u5378\u4e0b\u786c\u789f\u4e5f\u6703\u6709\u5c08\u7528 command,\u96d6\u7136\u5404\u5bb6\u7533\u8acb\u786c\u789f\u65b9\u5f0f\u4e0d\u4e00\u6a23,\u4f46\u662f linux command \u662f\u53ef\u4ee5\u5171\u7528\u7684\uff01","permalink":"/docs/linux-server/2023-04-11-linux-disk-management"},{"id":"Aws/2023-03-15-s3-setting-for-ci","title":"s3 set iam permissions for Github Actions to achieve CIBuild an AWS s3 static website","description":"\u5efa\u7acbaws\u975c\u614b\u7db2\u7ad9\u63a5\u4e0acloudfront\uff0c\u6700\u5f8c\u8a2d\u5b9a github action \u5728 code \u66f4\u65b0\u4ee5\u5f8c\u6703\u628a build \u597d\u7684\u8cc7\u6599\u7531 build \u8cc7\u6599\u593e\u5e95\u4e0b\u6771\u897f\u767c\u5230 S3.","permalink":"/docs/Aws/2023-03-15-s3-setting-for-ci"},{"id":"github-action/2023-03-15-s3-setting-for-ci","title":"s3 set iam permissions for Github Actions to achieve CIBuild an AWS s3 static website","description":"\u5efa\u7acbaws\u975c\u614b\u7db2\u7ad9\u63a5\u4e0acloudfront\uff0c\u6700\u5f8c\u8a2d\u5b9a github action \u5728 code \u66f4\u65b0\u4ee5\u5f8c\u6703\u628a build \u597d\u7684\u8cc7\u6599\u7531 build \u8cc7\u6599\u593e\u5e95\u4e0b\u6771\u897f\u767c\u5230 S3.","permalink":"/docs/github-action/2023-03-15-s3-setting-for-ci"}]}')}}]);