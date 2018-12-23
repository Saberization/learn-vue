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

