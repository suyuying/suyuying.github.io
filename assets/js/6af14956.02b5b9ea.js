"use strict";(self.webpackChunkwebsitev_1=self.webpackChunkwebsitev_1||[]).push([[8221],{16567:e=>{e.exports=JSON.parse('{"label":"linux","permalink":"/docs/tags/linux","allTagsPath":"/docs/tags","count":5,"items":[{"id":"linux-server/2023-04-27-linux-default-use-of-folder","title":"Common folder and their uses in Linux","description":"\u4ecb\u7d39linux\u7cfb\u7d71\u898f\u5283\u5404\u8cc7\u6599\u593e\u8981\u653e\u7f6e\u54ea\u9700\u6a94\u6848,\u900f\u904e\u672c\u7bc7,\u4f60\u53ef\u4ee5\u77e5\u9053\u5047\u5982\u4f60\u8981\u627e\u4f60\u7684mysql\u8cc7\u6599\u593e(\u900f\u904eyum\u5b89\u88dd),\u4f60\u61c9\u8a72\u53bb\u54ea\u627e.1. \u7528 yum \u5b89\u88dd mysql \u4e4b\u5f8c,\u8acb\u554f\u4ed6\u7684\u6578\u64da\u4f4d\u7f6e\u6703\u5728\u54ea\u500b\u8cc7\u6599\u593e? \u8a2d\u5b9a\u6a94\u6703\u5728\u54ea?\u6578\u64da\u6587\u4ef6\u6703\u653e\u5728/var/lib \u5e95\u4e0b,\u4ee5 mariadb \u70ba\u4f8b,\u5230/var/lib/mysql \u5e95\u4e0b\u6703\u770b\u5230\u5404\u6578\u64da\u5eab\u7684\u6578\u64da(\u6bcf\u500b database \u4e00\u500b folder)\u9084\u6709 crash recovery \u6642\u7528\u65bc\u5132\u5b58 metadata \u7684 log \u6a94\u6848\u7b49,\u9019\u662f\u56e0\u70ba/var \u898f\u5283\u662f\u653e\u6578\u64da\u6587\u4ef6\u8ddf\u65e5\u8a8c\u6587\u4ef6.\u8a2d\u5b9a\u6a94\u5728/etc \u5e95\u4e0b,\u4f9d\u64da\u7cfb\u7d71,centos \u53ef\u80fd\u5728/etc/my.cnf \u6216/etc/mysql/my.cnf,\u4e0d\u904e\u57fa\u672c\u4e0a\u90fd\u6703\u5728/etc,\u56e0\u70ba/etc \u898f\u5283\u653e\u7cfb\u7d71\u6216\u61c9\u7528\u7a0b\u5e8f\u7684 config \u7684,\u6ce8\u610f my.cnf \u6703\u7528!includedir /etc/my.cnf.d \u53bb\u9032\u4e00\u6b65\u5305\u8a2d\u5b9a\u6a94,\u9700\u8981 cnf \u70ba\u7d50\u5c3e.","permalink":"/docs/linux-server/2023-04-27-linux-default-use-of-folder"},{"id":"linux-server/2023-05-24-create-user-like-root","title":"how to create user like root","description":"\u5f9e\u6709\u95dc\u9375\u5b57\u70ba QOO \u90a3\u4e00\u884c\u5230\u4ee5}\u70ba\u958b\u982d\u7684\u90a3\u4e00\u884c(^\u4ee3\u8868\u6b63\u5247\u958b\u982d\u5b57\u5143),sed -n \\"/QOO/,/^}/p\\" common.js.","permalink":"/docs/linux-server/2023-05-24-create-user-like-root"},{"id":"linux-server/2023-03-08-linux-command-repratice","title":"linux command(sed grep awk)","description":"\u5f9e\u6709\u95dc\u9375\u5b57\u70ba QOO \u90a3\u4e00\u884c\u5230\u4ee5}\u70ba\u958b\u982d\u7684\u90a3\u4e00\u884c(^\u4ee3\u8868\u6b63\u5247\u958b\u982d\u5b57\u5143),sed -n \\"/QOO/,/^}/p\\" common.js.","permalink":"/docs/linux-server/2023-03-08-linux-command-repratice"},{"id":"linux-server/2023-04-11-linux-disk-management","title":"linux disk management command used commonly","description":"\u5728\u7ba1\u7406\u4e0a\u6703\u53bb\u6aa2\u8996\u786c\u789f\u4f7f\u7528\u91cf,\u8cc7\u6599\u593e\u8cc7\u6599\u5927\u5c0f,\u5982\u679c\u639b\u786c\u789f\u8ddf\u5378\u4e0b\u786c\u789f\u4e5f\u6703\u6709\u5c08\u7528 command,\u96d6\u7136\u5404\u5bb6\u7533\u8acb\u786c\u789f\u65b9\u5f0f\u4e0d\u4e00\u6a23,\u4f46\u662f linux command \u662f\u53ef\u4ee5\u5171\u7528\u7684\uff01\u4e26\u8aaa\u660e\u639b\u8f09\u786c\u789f\u8ddf\u5378\u8f09\u786c\u789f\u65b9\u6cd5","permalink":"/docs/linux-server/2023-04-11-linux-disk-management"},{"id":"linux-server/2023-08-16-systemctl-manage-service","title":"Use systemctl to manage service properly and safely","description":"\u4e3b\u8981\u908f\u8f2f\u5c31\u662f\u6703\u5148:`\u5efa\u7acb\u7cfb\u7d71\u5e33\u865f` -> `\u9650\u5236\u8cc7\u6599\u593e\u6b0a\u9650\u53caowner` -> `\u5efa\u7acbservice\u8a2d\u5b9a\u6a94` -> `\u900f\u904esystemctl\u8a17\u7ba1\u8a72service`.","permalink":"/docs/linux-server/2023-08-16-systemctl-manage-service"}]}')}}]);