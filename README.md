<!--
 * @Author: yanyanshan yanyanshan@bigo.sg
 * @Date: 2023-09-11 14:47:21
 * @LastEditors: yanyanshan yanyanshan@bigo.sg
 * @LastEditTime: 2023-09-12 11:40:21
 * @FilePath: /react-mobx-todos-demo/README.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
**学习本课程的前置条件**
* https://www.mobxjs.com/api  mobx的学习地址
* https://cn.mobx.js.org/  学习地址
* 会使用 create-react-app 搭建工程项目
* 已经掌握了 React 的基础知识
* 已经知道了状态管理的相关知识
* 已经学习过 ES6 的新特性，如装饰器、箭头函数等


**安装 Mobx**
```
cnpm install mobx -S
cnpm install mobx-react -S
```


**使用两个 Babel 插件，支持ES6装饰器语法**
```
cnpm install @babel/plugin-proposal-decorators -D
cnpm install @babel/plugin-proposal-class-properties -D
```
在 package.json 中配置如下：
```
[
 "@babel/plugin-proposal-decorators",
 {
 "legacy": true}],

[
 "@babel/plugin-proposal-class-properties",
 {
 "loose": true}
]
```
```
"parserOptions": {
   "ecmaFeatures": {
   "legacyDecorators": true
   }
 }
 ```

 **项目运行**

 ```
 # 配置淘宝镜像
 npm install -g cnpm --registry=https://registry.npm.taobao.org
 # 安装依赖库
 cnpm install
 # 运行项目、查看效果
 npm run dev
 ```
