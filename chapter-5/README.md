## 一、vue-router 路由

### 1. 简介

使用 `Vue.js` 开发 `SPA(Single Page Application)` 单页应用

> 根据不同 url 地址，显示不同的内容，但显示在同一个页面中，称为单页面应用。

[使用参考](https://router.vuejs.org/zh/)

安装：

```
npm install --save-dev vue-router
```

### 2. 基本用法

a. 布局

b. 路由配置

### 3. 路由嵌套和参数传递

传参的两种形式:

a. 查询字符串: `login?name=saber&pwd=123`

```js
// 组件中获取方式 
{{$route.query}}
```

b. `rest` 风格 url: `regist/saber/123`

```js
// 组件中获取方式
{{$route.params}}
```

### 4. 路由实例的方法

`router.push()`: 添加路由(更加确切的说是 `切换路由`、`跳转路由`，点击执行 `router-push({path: '/home'})` 直接 `跳转` 至 `/home` 的路由)，功能上与 `<router-link>` 相同

`router.replace()`: 替换路由(`router.replace('/user') 跳转至 /user 路由，并删除当前路由(无法通过返回按钮返回)`)，不产生历史记录

### 5. 路由结合动画

## 五、单文件组件

### 1. .vue文件

`.vue` 结尾的文件，称为单文件组件，是 `Vue.js` 自定义的一种文件格式，一个 `.vue` 文件就是一个单独的组件，在文件内封装了组件相关的代码: `html`、`css`、`js`

`.vue` 文件由三部分组成：

- `<template></template>`: HTML 代码
- `<style></style>`：CSS 代码
- `<script></script>`： JS 代码

### 2. vue-loader

浏览器本身并不认识 `.vue` 结尾的文件，所以必须对 `.vue` 文件进行加载和解析，此时需要 `vue-loader`。

类似的 `loader` 还有很多，如：`html-loader`、`css-loader`、`style-loader`、`babel-loader` 等。

需要注意的是 `vue-loader` 是基于 `webpack` 的。

### 3. webpack

`webpack` 是一个前端资源模块化加载器和打包工具，它能够把各种资源都作为模块使用和处理。

实际上，`webpack` 是通过不同的 `loeader` 将这些资源加载后打包，然后输出打包后文件。

简单来说，`webpack` 就是一个模块加载器，所有的资源都可以作为模块来加载，最后打包输出。

[官网](https://webpack.js.org/)

`webpack` 有一个核心的配置文件：`webpack.config.js`，必须放在项目的根目录下。

### 4. 示例、步骤：

#### 4.1 创建项目目录结构

webpack-demo
    |- index.html
    |- main.js   入口文件
    |- App.vue   vue文件
    |- package.json 工程文件
    |- webpack.config.js webpack配置文件
    |- .babelrc   Babel配置文件

#### 4.2 编写 App.vue

#### 4.3 安装相关模块

```
npm install vue --save-dev

npm install webpack --save-dev
npm install webpack-dev-server --save-dev

npm install vue-loader --save-dev
npm install vue-html-loader --save-dev
npm install css-loader --save-dev
npm install sass-loader --save-dev  用sass编写css的话必须安装的
npm install style-loader --save-dev
npm install node-sass -save-dev 用sass编写css的话必须安装的
npm install vue-style-loader --save-dev
npm install file-loader --save-dev

npm install @babel/core --save-dev
npm install babel-loader --save-dev

npm install vue-template-compiler --save-dev // 用来预编译模板，不用的话，.vue文件中的 template 无法被解析渲染出来。
```

[vue-loader 相关文档](https://vue-loader.vuejs.org/zh/migrating.html#值得注意的不兼容变更)

#### 4.4 编写 main.js

#### 4.5 编写 webpack.config.js

#### 4.6 编写 .babelrc

#### 4.7 编写 package.json

#### 4.8 运行测试

```
webpack-dev-server --open --hot --port 8099
```