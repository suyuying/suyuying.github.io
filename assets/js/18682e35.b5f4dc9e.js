"use strict";(self.webpackChunkwebsitev_1=self.webpackChunkwebsitev_1||[]).push([[6795],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>h});var s=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,s)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,s,a=function(e,n){if(null==e)return{};var t,s,a={},i=Object.keys(e);for(s=0;s<i.length;s++)t=i[s],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(s=0;s<i.length;s++)t=i[s],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var r=s.createContext({}),u=function(e){var n=s.useContext(r),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=u(e.components);return s.createElement(r.Provider,{value:n},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return s.createElement(s.Fragment,{},n)}},d=s.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=u(t),d=a,h=m["".concat(r,".").concat(d)]||m[d]||c[d]||i;return t?s.createElement(h,l(l({ref:n},p),{},{components:t})):s.createElement(h,l({ref:n},p))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=d;var o={};for(var r in n)hasOwnProperty.call(n,r)&&(o[r]=n[r]);o.originalType=e,o[m]="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=t[u];return s.createElement.apply(null,l)}return s.createElement.apply(null,t)}d.displayName="MDXCreateElement"},29493:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var s=t(87462),a=(t(67294),t(3905));const i={title:"Advanced Lab of ansible",description:"\u4e3b\u8981\u63cf\u8ff0\u5728\u6b63\u5f0f\u74b0\u5883\u4f7f\u7528\u4e0a,\u4f7f\u7528\u7684\u8cc7\u6599\u593e\u7d50\u69cb\u8ddf\u5404\u500b\u8cc7\u6599\u593e\u653e\u7684\u6a94\u6848\u529f\u80fd,\u4f8b\u5982roles\u5e95\u4e0b\u7684files,handlers,tasks,templates,vars\u8cc7\u6599\u593e,\u4ee5\u53cahost_vars,group_vars\u9019\u5e7e\u500b\u5b9a\u7fa9\u8b8a\u6578\u5730\u65b9\u7684\u7528\u6cd5.\u53e6\u5916\u8b1b\u6aa2\u67e5\u6307\u4ee4ansible-inventory -i hosts --list,\u8ddfansible-playbook playbook.yml --check --diff\u9019\u5169\u500b\u9078\u9805,ansible-inventory -i hosts --list\u53ef\u4ee5\u6aa2\u67e5ansible\u6709\u5403\u5230\u54ea\u4e9b\u8b8a\u6578,--check --diff\u53ef\u4ee5\u5148preview\u770bansible\u57f7\u884c\u5f8c\u6703\u505a\u7684\u52d5\u4f5c\u4e26\u770b\u6587\u6a94\u7570\u52d5\u72c0\u6cc1\uff01",authors:"suyuying",tags:["Ansible","IaC"]},l=void 0,o={unversionedId:"IaC/ansible/2023-07-06-ansible-mid-level",id:"IaC/ansible/2023-07-06-ansible-mid-level",title:"Advanced Lab of ansible",description:"\u4e3b\u8981\u63cf\u8ff0\u5728\u6b63\u5f0f\u74b0\u5883\u4f7f\u7528\u4e0a,\u4f7f\u7528\u7684\u8cc7\u6599\u593e\u7d50\u69cb\u8ddf\u5404\u500b\u8cc7\u6599\u593e\u653e\u7684\u6a94\u6848\u529f\u80fd,\u4f8b\u5982roles\u5e95\u4e0b\u7684files,handlers,tasks,templates,vars\u8cc7\u6599\u593e,\u4ee5\u53cahost_vars,group_vars\u9019\u5e7e\u500b\u5b9a\u7fa9\u8b8a\u6578\u5730\u65b9\u7684\u7528\u6cd5.\u53e6\u5916\u8b1b\u6aa2\u67e5\u6307\u4ee4ansible-inventory -i hosts --list,\u8ddfansible-playbook playbook.yml --check --diff\u9019\u5169\u500b\u9078\u9805,ansible-inventory -i hosts --list\u53ef\u4ee5\u6aa2\u67e5ansible\u6709\u5403\u5230\u54ea\u4e9b\u8b8a\u6578,--check --diff\u53ef\u4ee5\u5148preview\u770bansible\u57f7\u884c\u5f8c\u6703\u505a\u7684\u52d5\u4f5c\u4e26\u770b\u6587\u6a94\u7570\u52d5\u72c0\u6cc1\uff01",source:"@site/docs/IaC/ansible/2023-07-06-ansible-mid-level.md",sourceDirName:"IaC/ansible",slug:"/IaC/ansible/2023-07-06-ansible-mid-level",permalink:"/docs/IaC/ansible/2023-07-06-ansible-mid-level",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/IaC/ansible/2023-07-06-ansible-mid-level.md",tags:[{label:"Ansible",permalink:"/docs/tags/ansible"},{label:"IaC",permalink:"/docs/tags/ia-c"}],version:"current",frontMatter:{title:"Advanced Lab of ansible",description:"\u4e3b\u8981\u63cf\u8ff0\u5728\u6b63\u5f0f\u74b0\u5883\u4f7f\u7528\u4e0a,\u4f7f\u7528\u7684\u8cc7\u6599\u593e\u7d50\u69cb\u8ddf\u5404\u500b\u8cc7\u6599\u593e\u653e\u7684\u6a94\u6848\u529f\u80fd,\u4f8b\u5982roles\u5e95\u4e0b\u7684files,handlers,tasks,templates,vars\u8cc7\u6599\u593e,\u4ee5\u53cahost_vars,group_vars\u9019\u5e7e\u500b\u5b9a\u7fa9\u8b8a\u6578\u5730\u65b9\u7684\u7528\u6cd5.\u53e6\u5916\u8b1b\u6aa2\u67e5\u6307\u4ee4ansible-inventory -i hosts --list,\u8ddfansible-playbook playbook.yml --check --diff\u9019\u5169\u500b\u9078\u9805,ansible-inventory -i hosts --list\u53ef\u4ee5\u6aa2\u67e5ansible\u6709\u5403\u5230\u54ea\u4e9b\u8b8a\u6578,--check --diff\u53ef\u4ee5\u5148preview\u770bansible\u57f7\u884c\u5f8c\u6703\u505a\u7684\u52d5\u4f5c\u4e26\u770b\u6587\u6a94\u7570\u52d5\u72c0\u6cc1\uff01",authors:"suyuying",tags:["Ansible","IaC"]},sidebar:"tutorialSidebar",previous:{title:"Basic introduction of ansible",permalink:"/docs/IaC/ansible/2023-04-30-ansible-basic-introduction"},next:{title:"K8S",permalink:"/docs/category/k8s"}},r={},u=[{value:"\u8cc7\u6599\u593e\u7d50\u69cb",id:"\u8cc7\u6599\u593e\u7d50\u69cb",level:2},{value:"\u8a73\u7d30\u5404\u6a94\u6848\u5167\u5bb9",id:"\u8a73\u7d30\u5404\u6a94\u6848\u5167\u5bb9",level:2},{value:"site.yml",id:"siteyml",level:3},{value:"roles/ubuntu_base",id:"rolesubuntu_base",level:3},{value:"hosts",id:"hosts",level:3},{value:"vars",id:"vars",level:3},{value:"\u6aa2\u67e5\u6307\u4ee4",id:"\u6aa2\u67e5\u6307\u4ee4",level:2}],p={toc:u},m="wrapper";function c(e){let{components:n,...t}=e;return(0,a.kt)(m,(0,s.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\u8b8a\u6578\u5b9a\u7fa9\u65b9\u5f0f:"),(0,a.kt)("ol",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://blog.51cto.com/u_15127516/3557527#132-%E4%BD%BF%E7%94%A8host_vars%E5%AE%9A%E4%B9%89%E5%8F%98%E9%87%8F"},"ansible\u8b8a\u6578\u8a73\u89e3"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://docs.ansible.com/ansible/latest/playbook_guide/playbooks_variables.html#understanding-variable-precedence"},"\u5b98\u7db2\u8b8a\u6578\u512a\u5148\u6392\u5e8f"))))),(0,a.kt)("h2",{id:"\u8cc7\u6599\u593e\u7d50\u69cb"},"\u8cc7\u6599\u593e\u7d50\u69cb"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/suyuying/ansible_pratice"},"github\u4f4d\u7f6e")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},".\n\u251c\u2500\u2500 README.md\n\u251c\u2500\u2500 ansible.cfg\n\u251c\u2500\u2500 ansible.log\n\u251c\u2500\u2500 callback_plugins\n\u2502\xa0\xa0 \u251c\u2500\u2500 __pycache__\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 profile_tasks.cpython-310.pyc\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 profile_tasks.cpython-39.pyc\n\u2502\xa0\xa0 \u251c\u2500\u2500 profile_tasks.py\n\u2502\xa0\xa0 \u2514\u2500\u2500 profile_tasks.pyc\n\u251c\u2500\u2500 group_vars\n\u2502\xa0\xa0 \u2514\u2500\u2500 CentOS7.yaml\n\u251c\u2500\u2500 host_vars\n\u2502\xa0\xa0 \u251c\u2500\u2500 Centos8.yaml\n\u2502\xa0\xa0 \u251c\u2500\u2500 localhost.yaml\n\u2502\xa0\xa0 \u2514\u2500\u2500 prometheus_server\n\u251c\u2500\u2500 hosts\n\u251c\u2500\u2500 roles\n\u2502\xa0\xa0 \u251c\u2500\u2500 docker\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 tasks\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 main.yaml\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 vars\n\u2502\xa0\xa0 \u2502\xa0\xa0     \u2514\u2500\u2500 main.yaml\n\u2502\xa0\xa0 \u251c\u2500\u2500 nginx\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 tasks\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 main.yaml\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 vars\n\u2502\xa0\xa0 \u2502\xa0\xa0     \u2514\u2500\u2500 main.yaml\n\u2502\xa0\xa0 \u2514\u2500\u2500 ubuntu_base\n\u2502\xa0\xa0     \u251c\u2500\u2500 files\n\u2502\xa0\xa0     \u2502\xa0\xa0 \u251c\u2500\u2500 ansible.pub\n\u2502\xa0\xa0     \u2502\xa0\xa0 \u2514\u2500\u2500 kaka.pub\n\u2502\xa0\xa0     \u251c\u2500\u2500 handlers\n\u2502\xa0\xa0     \u2502\xa0\xa0 \u2514\u2500\u2500 main.yml\n\u2502\xa0\xa0     \u251c\u2500\u2500 tasks\n\u2502\xa0\xa0     \u2502\xa0\xa0 \u2514\u2500\u2500 main.yaml\n\u2502\xa0\xa0     \u251c\u2500\u2500 templates\n\u2502\xa0\xa0     \u2502\xa0\xa0 \u2514\u2500\u2500 sshd_config.j2\n\u2502\xa0\xa0     \u2514\u2500\u2500 vars\n\u2502\xa0\xa0         \u2514\u2500\u2500 main.yaml\n\u251c\u2500\u2500 site.yaml\n\u2514\u2500\u2500 test.yaml\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u56e0\u70ba\u6a94\u6848\u592a\u591a\u4e86,\u8b80\u7684\u9806\u5e8f\u6703\u662f\u5165\u53e3\u9ede",(0,a.kt)("inlineCode",{parentName:"li"},"site.yaml"),"\u770b\u662f\u4f7f\u7528\u54ea\u500brole"),(0,a.kt)("li",{parentName:"ul"},"\u5230",(0,a.kt)("inlineCode",{parentName:"li"},"roles"),"\u8cc7\u6599\u593e\u5e95\u4e0b\u770b\u5c0d\u61c9role,ex ",(0,a.kt)("inlineCode",{parentName:"li"},"ubuntu_base"),",\u4ed6\u5e95\u4e0b\u4e5f\u6709\u4e00\u5806\u8cc7\u6599\u593e"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ubuntu_base"),"\u8cc7\u6599\u593e\u5e95\u4e0b\u770b",(0,a.kt)("inlineCode",{parentName:"li"},"tasks"),"\u88e1\u9762\u7684main.yaml,\u57fa\u672c\u4e0a\u8a72role\u6703\u505a\u7684\u5404\u6307\u4ee4\u5c31\u6703\u5728\u4e0a\u9762",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"tasks"),"\u88e1\u9762\u6703\u7528\u5230\u7684\u8b8a\u6578\u8981\u770b",(0,a.kt)("inlineCode",{parentName:"li"},"vars"),"\u8cc7\u6599\u593e or ",(0,a.kt)("inlineCode",{parentName:"li"},"host_vars")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"group_vars"),"\u7b49\u8cc7\u6599\u593e,\u8b8a\u6578\u6709\u5f88\u591a\u5c64\u7d1a\u6703\u4f9d\u64da\u512a\u5148\u5e8f\u53bb\u62ff\u503c\uff01"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"files"),"\u8cc7\u6599\u593e\u6703\u653e\u8981\u8907\u88fd\u904e\u53bb\u7684\u6587\u4ef6,ex.\u9019\u908a\u653e\u7684\u662f\u516c\u9470,\u4e5f\u53ef\u4ee5\u653e\u66f4\u65b0\u7684\u6191\u8b49\u7b49"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"templates"),"\u8cc7\u6599\u593e\u4e5f\u662f\u653e\u8981\u8907\u88fd\u5230\u76ee\u6a19\u4e3b\u6a5f\u7684\u6587\u4ef6,\u8ddf",(0,a.kt)("inlineCode",{parentName:"li"},"file"),"\u8cc7\u6599\u593e\u5dee\u5225\u662f",(0,a.kt)("inlineCode",{parentName:"li"},"templates"),"\u88e1\u9762\u653e\u7684\u6587\u4ef6\u53ef\u4ee5\u900f\u904e\u6316\u8b8a\u6578\u628a\u503c\u653e\u5165,\u4f8b\u5982\u6211\u8981\u8a2d\u5b9a\u76ee\u6a19\u4e3b\u6a5f\u7684sshd_config,\u505a\u5230\u5403\u8b8a\u6578\u4ee5\u6539ssh port\u9019\u985e\u64cd\u4f5c"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"handlers"),"\u8cc7\u6599\u593e\u88e1\u9762\u653e\u7684\u662f\u7576\u67d0\u689d\u4ef6\u9054\u6210\u5f8c\u6703\u57f7\u884c\u7684\u6307\u4ee4,\u5e38\u5e38\u7528\u5728\u8a2d\u5b9a\u6a94\u6709\u6539\u52d5,\u624d\u6703\u91cd\u555f\u670d\u52d9\u7684\u64cd\u4f5c."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"roles"),"\u7d50\u675f\u5f8c,\u6703\u78ba\u8a8d\u76ee\u6a19\u4e3b\u6a5f,\u9019\u908a\u662f\u653e\u5728",(0,a.kt)("inlineCode",{parentName:"li"},"hosts"),"\u6587\u4ef6\u5167(\u6709\u5f88\u591a\u653e\u6cd5,\u53ef\u4ee5\u53c3\u8003\u5b98\u65b9\u5efa\u8b70best pratices).")),(0,a.kt)("p",null,"\u57f7\u884c\u6307\u4ee4"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ansible-playbook -i /path/to/your/inventory site.yml --limit 'yourInstancesGroup'\n")),(0,a.kt)("p",null,"\u4e4b\u5f8c\u793a\u7bc4\u662f\u5148\u7528\u9019\u500b\u6307\u4ee4,\u6307\u5b9a\u4e3b\u6a5f\u8ddf\u5287\u672c\uff01"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ansible-playbook -i ./hosts site.yaml --limit 'Ubuntu22'\n")),(0,a.kt)("h2",{id:"\u8a73\u7d30\u5404\u6a94\u6848\u5167\u5bb9"},"\u8a73\u7d30\u5404\u6a94\u6848\u5167\u5bb9"),(0,a.kt)("p",null,"\u6703\u4ee5ubuntu\u70ba\u4f8b,\u4e4b\u5f8c\u6703\u5beb\u5224\u65b7\u4e3b\u6a5f\u7cfb\u7d71\uff01"),(0,a.kt)("h3",{id:"siteyml"},"site.yml"),(0,a.kt)("p",null,"\u7b2c\u4e00\u500b play \u91dd\u5c0d Ubuntu22 \u4e3b\u6a5f\u7fa4\u7d44\u57f7\u884c\u3002gather_facts: True \u8868\u793a\u5728\u904b\u884c play \u4e4b\u524d\u641c\u96c6\u4e3b\u6a5f\u7684\u4e8b\u5be6\u3002roles \u4e2d\u6307\u5b9a\u4e86 ubuntu_base \u89d2\u8272,\u5176\u4ed6\u610f\u601d\u5dee\u4e0d\u591a\uff0c\u9810\u8a2d\u60c5\u6cc1\u4e0b\uff0cAnsible \u6703\u5728\u5c0d\u61c9\u7684roles\u8cc7\u6599\u593e\u7684 tasks \u8cc7\u6599\u593e\u4e2d\u5c0b\u627e\u4e26\u57f7\u884c main.yml \u6a94\u6848\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="site.yml"',title:'"site.yml"'},"---\n- hosts: Ubuntu22\n  gather_facts: True\n  roles:\n    - ubuntu_base\n\n- hosts: Docker\n  gather_facts: False\n  roles:\n    - docker\n\n- hosts: Nginx\n  gather_facts: True\n  roles:\n    - nginx\n")),(0,a.kt)("h3",{id:"rolesubuntu_base"},"roles/ubuntu_base"),(0,a.kt)("p",null,"\u9019\u908a\u6703\u7528ubuntu_base\u8cc7\u6599\u593e\u505a\u76ee\u6a19,\u5e95\u4e0btasks\u505a\u7684\u4e8b\u60c5\u662f\u5c0d\u7cfb\u7d71\u7684\u57fa\u790e\u64cd\u4f5c.ansible_distribution \u662f Ansible \u7684\u7cfb\u7d71\u4e8b\u5be6 (system fact) \u4e4b\u4e00\uff0c\u5b83\u662f Ansible \u5728\u76ee\u6a19\u4e3b\u6a5f\u4e0a\u57f7\u884c\u6642\u81ea\u52d5\u6536\u96c6\u7684\u7cfb\u7d71\u76f8\u95dc\u8cc7\u8a0a\u4e4b\u4e00\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="roles/ubuntu_base/tasks/main.yaml"',title:'"roles/ubuntu_base/tasks/main.yaml"'},"# Disable SELinux\n- name: diskable SELinux\n  selinux:\n    state: disabled\n  when: ansible_distribution == 'CentOS'\n\n\n- name: Check if Service Exists\n  shell: \"systemctl -a|grep {{ need_to_stopped_service}}|wc -l\"\n  register: service_exists\n\n- name: Stop service firewalld, if started\n  ansible.builtin.service:\n    name: \"{{ need_to_stopped_service }}\"\n    state: stopped\n    enabled: false\n  when: service_exists|int > 0\n\n- name: Set a hostname\n  ansible.builtin.hostname:\n    name: \"{{ hostname }}\"\n  become: true\n\n- name: install Base package\n  apt:\n    name: \"{{ item }}\"\n    state: latest\n  loop: \"{{ base_packages }}\"\n  become: true\n# set the TimeZone\n- name: Set timezone to Asia/Manila\n  community.general.timezone:\n    name: \"{{ time_zone }}\"\n  become: true\n\n\n- name: Set sysctl file limits\n  #pam_limits: domain='*' limit_type=`item`.`limit_type` limit_item=`item`.`limit_item` value=`item`.`value`\n  become: true\n  pam_limits:\n      dest: \"{{ item.dest }}\"\n      domain: '*'\n      limit_type: \"{{ item.limit_type }}\"\n      limit_item: \"{{ item.limit_item }}\"\n      value: \"{{ item.value }}\"\n  with_items:\n      - { dest: '/etc/security/limits.conf',limit_type: 'soft',limit_item: 'nofile', value: '655350' }\n      - { dest: '/etc/security/limits.conf',limit_type: 'hard',limit_item: 'nofile', value: '655350'}\n      - { dest: '/etc/security/limits.conf',limit_type: 'soft',limit_item: 'nproc', value: '102400' }\n      - { dest: '/etc/security/limits.conf',limit_type: 'hard',limit_item: 'nproc', value: '102400' }\n      - { dest: '/etc/security/limits.conf',limit_type: 'soft',limit_item: 'sigpending', value: '255377' }\n      - { dest: '/etc/security/limits.conf',limit_type: 'hard',limit_item: 'sigpending', value: '255377' }\n      - { dest: '/etc/security/limits.d/90-nproc.conf', limit_type: 'soft',limit_item: 'nproc', value: '262144' }\n      - { dest: '/etc/security/limits.d/90-nproc.conf', limit_type: 'hard',limit_item: 'nproc', value: '262144' }\n  tags:\n      - setlimits\n\n# add ops group\n- name: Ensure group \"ops\" exists\n  become: true\n  ansible.builtin.group:\n    name: ops\n    state: present\n\n# add ops user\n- name: Add the user 'ops' with a bash shell, appending the group ops\n  become: true\n  ansible.builtin.user:\n    name: ops\n    shell: /bin/bash\n    groups: ops\n    append: yes\n\n# add sudo previleges to the ops user\n- name: Config /etc/sudoers\n  become: true\n  lineinfile: dest=/etc/sudoers state=present  line='{{item}}' validate='visudo -cf %s'\n  with_items:\n    - \"ops ALL=(ALL) NOPASSWD: ALL\"\n    - \"Defaults: ops !requiretty\"\n\n- name: Set up multiple authorized keys\n  become: true\n  authorized_key:\n    user: ops\n    state: present\n    key: '{{ item }}'\n  with_file: \"{{ ssh_pub_key }}\"\n\n\n# config ssh config\n- name: Update sshd configuration safely, avoid locking yourself out\n  become: true\n  ansible.builtin.template:\n    src: sshd_config.j2\n    dest: /etc/ssh/sshd_config\n    owner: root\n    group: root\n    mode: '0600'\n    validate: /usr/sbin/sshd -t -f %s\n    backup: yes\n  notify:\n    - (Handler) Restart SSHD Service\n  tags:\n    - ssd_config\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u958b\u982d\u7684\u689d\u4ef6\u5224\u65b7,ansible_distribution \u662f\u7528\u65bc\u689d\u4ef6\u5224\u65b7\u7684\u4e00\u90e8\u5206\uff0c\u4ee5\u78ba\u5b9a SELinux \u7981\u7528\u4efb\u52d9\u50c5\u5728 CentOS \u767c\u884c\u7248\u4e0a\u57f7\u884c,\u5728ubuntu\u4e0d\u9700\u8981\u64cd\u4f5c\uff01")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u4e2d\u9593\u7684\u6a94\u6848\u9650\u5236, /etc/security/limits.conf \u4e2d\u7684 nofile \u9650\u5236\u662f\u9650\u5236\u6bcf\u500b\u9032\u7a0b\u5141\u8a31\u6253\u958b\u7684\u6a94\u6848\u6578\u91cf./etc/security/limits.conf \u4e2d\u7684 nproc \u9650\u5236\u662f\u8a2d\u5b9a\u55ae\u500b\u4f7f\u7528\u8005\u53ef\u555f\u52d5\u7684\u6700\u5927\u9032\u7a0b\u6578\u91cf./etc/security/limits.conf \u4e2d\u7684 sigpending \u9650\u5236\u662f\u8a2d\u5b9a\u55ae\u500b\u4f7f\u7528\u8005\u53ef\u4ee5\u7b49\u5f85\u8655\u7406\u7684\u4fe1\u865f(\u4f5c\u696d\u7cfb\u7d71\u548c\u7a0b\u5f0f\u4e92\u76f8\u6e9d\u901a\u7684\u6a5f\u5236)\u6578\u91cf\u4e0a\u9650./etc/security/limits.d/90-nproc.conf \u4e2d\u7684 nproc \u9650\u5236\u4e5f\u662f\u9650\u5236\u662f\u8a2d\u5b9a\u55ae\u500b\u4f7f\u7528\u8005\u53ef\u555f\u52d5\u7684\u6700\u5927\u9032\u7a0b\u6578\u91cf.\u6703\u4ee590-nproc.conf\u512a\u5148,\u7c21\u8a00\u4e4b\u5c31\u662f\u9650\u5236\u4ee5\u4e0b\u9019\u5e7e\u4ef6\u4e8b."),(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"\u958b\u555f\u6a94\u6848\u6578\u91cf"),(0,a.kt)("li",{parentName:"ol"},"\u53ef\u4ee5\u958b\u555f\u7684\u9032\u7a0b\u6578"),(0,a.kt)("li",{parentName:"ol"},"\u53ef\u7b49\u5f85\u8655\u7406\u7684\u4fe1\u865f\u6578"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u6587\u5c3e\u662f\u544a\u8a34\u4ed6\u600e\u9ebc\u8907\u88fdsshd\u6a94\u6848\u5230\u5c0d\u9762\u4e3b\u6a5f,\u800c\u7576\u4e00\u500b\u4efb\u52d9\u5305\u542b\u4e86 notify \u6307\u4ee4\uff0c\u90a3\u9ebc\u53ea\u6709\u7576\u9019\u500b\u4efb\u52d9\u7684\u7d50\u679c\u662f\u300c\u6539\u8b8a\u300d\uff08change\uff09\u7684\u6642\u5019\uff0c\u5c0d\u61c9\u7684 handler \u624d\u6703\u88ab\u89f8\u767c\u3002\u4e26\u4e14\uff0c\u7121\u8ad6\u6709\u591a\u5c11\u500b\u4efb\u52d9\u89f8\u767c\u4e86\u540c\u4e00\u500b handler\uff0c\u5728\u6574\u500b playbook \u7684\u904b\u884c\u904e\u7a0b\u4e2d\uff0c\u90a3\u500b handler \u90fd\u53ea\u6703\u88ab\u904b\u884c\u4e00\u6b21\uff0c\u4e26\u4e14\u662f\u5728\u6240\u6709\u7684\u4efb\u52d9\u90fd\u904b\u884c\u5b8c\u6210\u5f8c\u3002\u9019\u7a2e\u6a21\u5f0f\u975e\u5e38\u9069\u5408\u65bc\u7ba1\u7406\u90a3\u4e9b\u53ea\u9700\u8981\u5728\u914d\u7f6e\u6539\u8b8a\u6642\u624d\u9700\u8981\u904b\u884c\u7684\u4efb\u52d9\uff0c\u6bd4\u5982\u670d\u52d9\u7684\u91cd\u555f\u3002"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="roles/ubuntu_base/vars/main.yaml"',title:'"roles/ubuntu_base/vars/main.yaml"'},"base_packages:\n  # - epel-release\n  - vim\n  - git\n  - tree\n  - lrzsz\n  - lsof\n  - net-tools\n    # - openssl-devel\n  - wget\n    #  - nc\n\ntime_zone: Asia/Manila\n\nssh_config:\n  port: 22\n  disalbe_root_login: False\n  disalbe_password_login: False\n\n\nssh_pub_key:\n  - files/test.pub\n\nneed_to_stopped_service: firewalld\n")),(0,a.kt)("p",null,"\u5b9a\u7fa9\u6316\u7a7a\u7684\u8b8a\u6578,\u57fa\u672c\u4e0a\u8b8a\u6578\u9806\u5e8f\u5f88\u591a,\u5e38\u7528\u7684\u512a\u5148\u5e8f\u5982\u4e0b"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"tasks/var")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"host_vars")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"group_vars"))),(0,a.kt)("p",null,"\u4ed6\u6709\u5f88\u591a\u9806\u5e8f,\u8a73\u7d30\u770b",(0,a.kt)("a",{parentName:"p",href:"https://docs.ansible.com/ansible/latest/playbook_guide/playbooks_variables.html#understanding-variable-precedence"},"\u5b98\u7db2\u9019\u908a")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"roles/ubuntu_base/templates/sshd_config.j2"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# $OpenBSD: sshd_config,v 1.100 2016/08/15 12:32:04 naddy Exp $\n\n# This is the sshd server system-wide configuration file.  See\n# sshd_config(5) for more information.\n\n# This sshd was compiled with PATH=/usr/local/bin:/usr/bin\n\n# The strategy used for options in the default sshd_config shipped with\n# OpenSSH is to specify options with their default value where\n# possible, but leave them commented.  Uncommented options override the\n# default value.\n\n# If you want to change the port on a SELinux system, you have to tell\n# SELinux about this change.\n# semanage port -a -t ssh_port_t -p tcp #PORTNUMBER\n#\nPort {{ ssh_config.port }}\n#AddressFamily any\n#ListenAddress 0.0.0.0\n#ListenAddress ::\n\nHostKey /etc/ssh/ssh_host_rsa_key\n#HostKey /etc/ssh/ssh_host_dsa_key\nHostKey /etc/ssh/ssh_host_ecdsa_key\nHostKey /etc/ssh/ssh_host_ed25519_key\n\n# Ciphers and keying\n#RekeyLimit default none\n\n# Logging\n#SyslogFacility AUTH\nSyslogFacility AUTHPRIV\n#LogLevel INFO\n\n# Authentication:\n\n#LoginGraceTime 2m\n\n\n{% if ssh_config.disalbe_root_login %}\nPermitRootLogin no\n{% else %}\nPermitRootLogin yes\n{% endif %}\n\n#StrictModes yes\n#MaxAuthTries 6\n#MaxSessions 10\n\n#PubkeyAuthentication yes\n\n# The default is to check both .ssh/authorized_keys and .ssh/authorized_keys2\n# but this is overridden so installations will only check .ssh/authorized_keys\nAuthorizedKeysFile .ssh/authorized_keys\n\n#AuthorizedPrincipalsFile none\n\n#AuthorizedKeysCommand none\n#AuthorizedKeysCommandUser nobody\n\n# For this to work you will also need host keys in /etc/ssh/ssh_known_hosts\n#HostbasedAuthentication no\n# Change to yes if you don't trust ~/.ssh/known_hosts for\n# HostbasedAuthentication\n#IgnoreUserKnownHosts no\n# Don't read the user's ~/.rhosts and ~/.shosts files\n#IgnoreRhosts yes\n\n# To disable tunneled clear text passwords, change to no here!\n\n{% if ssh_config.disalbe_password_login %}\nPasswordAuthentication no\n{% else %}\nPasswordAuthentication yes\n{% endif %}\n\n\n\n\n#PermitEmptyPasswords no\n\n# Change to no to disable s/key passwords\n#ChallengeResponseAuthentication yes\nChallengeResponseAuthentication no\n\n# Kerberos options\n#KerberosAuthentication no\n#KerberosOrLocalPasswd yes\n#KerberosTicketCleanup yes\n#KerberosGetAFSToken no\n#KerberosUseKuserok yes\n\n# GSSAPI options\nGSSAPIAuthentication yes\nGSSAPICleanupCredentials no\n#GSSAPIStrictAcceptorCheck yes\n#GSSAPIKeyExchange no\n#GSSAPIEnablek5users no\n\n# Set this to 'yes' to enable PAM authentication, account processing,\n# and session processing. If this is enabled, PAM authentication will\n# be allowed through the ChallengeResponseAuthentication and\n# PasswordAuthentication.  Depending on your PAM configuration,\n# PAM authentication via ChallengeResponseAuthentication may bypass\n# the setting of \"PermitRootLogin without-password\".\n# If you just want the PAM account and session checks to run without\n# PAM authentication, then enable this but set PasswordAuthentication\n# and ChallengeResponseAuthentication to 'no'.\n# WARNING: 'UsePAM no' is not supported in Red Hat Enterprise Linux and may cause several\n# problems.\nUsePAM yes\n\n#AllowAgentForwarding yes\n#AllowTcpForwarding yes\n#GatewayPorts no\nX11Forwarding yes\n#X11DisplayOffset 10\n#X11UseLocalhost yes\n#PermitTTY yes\n#PrintMotd yes\n#PrintLastLog yes\n#TCPKeepAlive yes\n#UseLogin no\n#UsePrivilegeSeparation sandbox\n#PermitUserEnvironment no\n#Compression delayed\n#ClientAliveInterval 0\n#ClientAliveCountMax 3\n#ShowPatchLevel no\n#UseDNS yes\n#PidFile /var/run/sshd.pid\n#MaxStartups 10:30:100\n#PermitTunnel no\n#ChrootDirectory none\n#VersionAddendum none\n\n# no default banner path\n#Banner none\n\n# Accept locale-related environment variables\nAcceptEnv LANG LC_CTYPE LC_NUMERIC LC_TIME LC_COLLATE LC_MONETARY LC_MESSAGES\nAcceptEnv LC_PAPER LC_NAME LC_ADDRESS LC_TELEPHONE LC_MEASUREMENT\nAcceptEnv LC_IDENTIFICATION LC_ALL LANGUAGE\nAcceptEnv XMODIFIERS\n\n# override default of no subsystems\nSubsystem sftp /usr/lib/openssh/sftp-server\n\n# Example of overriding settings on a per-user basis\n#Match User anoncvs\n# X11Forwarding no\n# AllowTcpForwarding no\n# PermitTTY no\n# ForceCommand cvs server\n"))),(0,a.kt)("p",null,"\u9019\u908a\u5c31\u662fsshd\u7684config,\u6703\u628a\u8b8a\u6578\u586b\u5165\u88dc\u7a7a\uff01\u5982\u679c\u76f8\u540c\u5247\u4e0d\u6703change!"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="roles/ubuntu_base/handlers/main.yaml"',title:'"roles/ubuntu_base/handlers/main.yaml"'},"- name: (Handler) Restart SSHD Service\n  become: true\n  service:\n    name: sshd\n    state: restarted\n    enabled: yes\n")),(0,a.kt)("p",null,"handels\u5e95\u4e0b\u7684yaml\u6703\u5c0d\u61c9tasks\u88e1\u9762\u67d0\u500b\u6709\u8a2d\u5b9anotify\u7684task,\u7576\u72c0\u614b\u70bachange\u6703\u89f8\u767chandler\u64cd\u4f5c,\u4e3b\u8981\u7528\u9014\u662f\u7528\u65bc\u4fee\u6539\u8a2d\u5b9a\u6a94\u5f8c\u7684\u670d\u52d9\u91cd\u555f,\u5982\u679c\u8a2d\u5b9a\u6c92\u6539\u8b8a\u5c31\u7576\u7136\u4e0d\u7528\u91cd\u555f\u4e86."),(0,a.kt)("h3",{id:"hosts"},"hosts"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="hosts"',title:'"hosts"'},"[Ubuntu22]\nprometheus_server ansible_host=10.0.0.112\n\n[Ubuntu22:vars]\nansible_user=ubuntu\n\n\n[CentOS7]\nlocalhost\nCentos8\n\n[Docker]\nlocalhost\nCentos8\n\n[Nginx]\nlocalhost\nCentos8\n")),(0,a.kt)("p",null,"\u56e0\u70ba\u6211\u9019\u908a\u4e3b\u8981\u793a\u7bc4\u5c0dubnutu\u90e8\u7f72,\u6240\u4ee5\u4f86\u770b",(0,a.kt)("inlineCode",{parentName:"p"},"[Ubuntu22]"),",\u9019\u908a\u5b9a\u7fa9\u4e3b\u6a5f\u5beb\u6cd5",(0,a.kt)("inlineCode",{parentName:"p"},"prometheus_server ansible_host=10.0.0.112"),"\u662f\u56e0\u70ba\u65b9\u908a\u8fa8\u8a8d,\u76f4\u63a5\u7528ip\u770b\u4e0d\u51fa\u4f86\u662fserver\u7528\u9014.\u8981\u6ce8\u610f\u7684\u662f,\u5982\u679c\u60f3\u8981\u5c0dhost\u76f4\u63a5\u5b9a\u7fa9\u8b8a\u6578\u503c,\u5c31\u9700\u8981\u5728host_vars\u5e95\u4e0b\u505a\u4e00\u500b\u5c0d\u61c9\u7684prometheus_server\u6587\u4ef6,\u9019\u500b\u5f88\u91cd\u8981\uff01",(0,a.kt)("inlineCode",{parentName:"p"},"[Ubuntu22:vars]ansible_user=ubuntu"),"\u9019\u500b\u662f\u5b9a\u7fa9ansible\u9023\u9032\u53bb\u7684\u4f7f\u7528\u8005,\u56e0\u70ba\u9810\u8a2d\u6703\u9023\u5230root,\u4f46\u6709\u4e9bssh config\u662f\u9650\u5236root\u4e0d\u80fd\u9023\u5165\uff01"),(0,a.kt)("h3",{id:"vars"},"vars"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="host_vars/prometheus_server"',title:'"host_vars/prometheus_server"'},"---\ntest1: value1\nansible_ssh_port: 22\nhostname: backend1\n")),(0,a.kt)("p",null,"\u9019\u5c31\u662f\u524d\u9762\u8aaa\u7684,\u5f88\u91cd\u8981!\u8981\u91dd\u5c0d\u7279\u5b9a\u4e3b\u6a5f\u8a2d\u5b9a\u8b8a\u6578,\u4f60\u7684\u6a94\u540d\u4e00\u5b9a\u8981\u8ddf\u4f60\u5b9a\u7fa9\u5728hosts\u7684\u76f8\u540c\uff01ex.",(0,a.kt)("inlineCode",{parentName:"p"},"host_vars/prometheus_server"),"\u5c31\u6703\u5c0d\u61c9\u5230",(0,a.kt)("inlineCode",{parentName:"p"},"hosts"),"\u6587\u4ef6\u5167\u7684\u90a3\u884c",(0,a.kt)("inlineCode",{parentName:"p"},"prometheus_server ansible_host=10.0.0.112"),",\u5982\u679c\u6c92\u6709\u5c0d\u5230\u5c31\u6703\u6c92\u8b8a\u6578\uff01"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="group_vars/CentOS7.yaml"',title:'"group_vars/CentOS7.yaml"'},"---\nversion: CentOS7\n")),(0,a.kt)("p",null,"group_vars\u4e5f\u662f\u8981\u5c0d\u61c9\u5230",(0,a.kt)("inlineCode",{parentName:"p"},"[group]"),"\u9019\u6a23,\u8ddfhosts_vars\u5f88\u50cf\uff01"),(0,a.kt)("h2",{id:"\u6aa2\u67e5\u6307\u4ee4"},"\u6aa2\u67e5\u6307\u4ee4"),(0,a.kt)("p",null,"\u4f60\u8a2d\u5b9a\u5b8c\u4e4b\u5f8c,\u9664\u4e86\u76f4\u63a5\u5c0d\u4e3b\u6a5f\u57f7\u884c\u7b49\u4ed6\u8dd1\u5b8c\u770b\u7d50\u679c,\u9084\u6709\u5176\u4ed6\u65b9\u5f0f\u505a\u6aa2\u67e5\u55ce\uff1f"),(0,a.kt)("p",null,"\u4ee5\u4e0b\u6307\u4ee4\u53ef\u4ee5\u6aa2\u67e5\u5404\u53f0\u4e3b\u6a5f\u6709\u5403\u5230\u7684\u8b8a\u6578"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ansible-inventory -i hosts --list\n")),(0,a.kt)("p",null,"\u6aa2\u67e5\u9810\u8a08\u6539\u8b8a\u72c0\u6cc1,\u540c\u6642\u5982\u679c\u6587\u4ef6\u6709\u7570\u52d5,\u986f\u793a\u7570\u52d5\u60c5\u6cc1,\u5e36--check\u8ddf--diff"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"}," ansible-playbook -i ./hosts site.yaml --limit 'Ubuntu22' --diff --check\n")))}c.isMDXComponent=!0}}]);