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

## 二、单文件组件

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

## 三、vue-cli 脚手架

### 1. 简介

`vue-cli` 是一个 `vue` 的脚手架，可以快速的搭建项目结构

`vue-cli` 本身集成了多种项目模板：

- `simple`: 很少用，很简单

- `webpack`: 包含 `eslint` 代码规范检查和 `unit` 单元测试等

- `webpack-simple`: 没有代码规范检查和单元测试

- `browserify`: 使用了 `browserify` 作为打包工具

- `browserify-simple`

### 2. 示例，步骤：

#### 2.1 安装 vue-cli，配置 vue 命令环境

```
全局安装
npm install vue-cli -g

查看版本号
vue -V

查看版本
vue list
```

#### 2.2 初始化项目，生成项目模板

语法：`vue init 模板名 项目名`

[vue-cli](https://github.com/vuejs/vue-cli)

#### 2.3 进入项目目录，安装依赖模块包

`npm install`

#### 2.4 运行

`npm run dev` 启动测试服务

`npm run build` 将项目打包输出 `dist`，项目上线的时候将 `dist` 目录放到服务器上

## 四、模块化开发

### 1. vue-router 模块化

`npm install vue-router --save-dev`

插件引入后需要使用才能有效

`Vue.use(VueRouter)`

#### 1.2 编辑 main.js

#### 1.3 编辑 router.config.js

### 2. axios 模块化

`npm install axios --save-dev`

使用 `axios` 的两种方式：

- 在每个组件中都引入 `axios` 

- 在 `main.js` 中全局引入 `axios`，并添加到 `Vue` 的原型上 `Vue.prototype.$ajax = axios`

### 3. 为自定义组件添加事件

## 二、Element UI

Element UI 是饿了么前端团队开源的一套基于 vue2.0 的UI组件库

Element UI - PC端

MintUI - 移动端

官网地址：[http://element-cn.eleme.io/#/zh-CN/component/installation](http://element-cn.eleme.io/#/zh-CN/component/installation)

### 2.1 安装 element ui

`npm i element-ui -S`

### 2.2 在 main.js 中引入

方式一：

这种引入方式，将ElementUI组件全部引入了

```js
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI)
```

## 三、自定义全局组件(插件)

全局组件(插件)：就是指可以在 `main.js` 中使用 `Vue.use()` 进行全局引入，然后再其他组件中就都可以使用了，如 `vue-router`

普通组件(插件)：每次使用都需要引入，如 `axios`

`import axios from 'axios'`

## 四、Vuex

### 1. 简介

Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。

简单来说，用来集中管理数据，类似，类似于 `React` 中的 `Redux`，都是基于 `Flux` 的前端状态管理框架。

### 2. 基本用法

#### 2.1 安装 vuex

`npm install vuex -S`

#### 2.2 创建 store.js 文件，在 main.js 入口文件中导入并配置 store 选项

#### 2.3 编辑 store.js

`Vuex` 的核心是 `store(仓库)`，相当于一个容器，一个 `store` 实例中包含了以下属性方法：

- `state`: 定义属性(状态、数据)
- `getters`: 用来获取数据的
- `actions`: 定义方法(动作)
  - `commit`: 提交变化，修改数据唯一方式就是显式的提交 mutations
- `mutations`: 定义变化

__注意：__ 不能直接修改数据，必须是显式的提交变化，目的是为了追踪到状态的变化

#### 2.4 编辑 App.vue

在子组件中访问 `store` 对象的两种方式：

方式1: 通过 `this.$store` 访问
方式2: 通过 `mapState`、 `mapGetters`、`mapActions` 访问，`vuex` 提供了两个方法：

- `mapState` 获取state
- `mapGetters` 获取属性(数据)
- `mapActions` 获取方法(动作)