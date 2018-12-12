## 一、组件 components

### 1. 什么是组件？

组件(components) 是 vue.js 最强大的功能之一，组件可以扩展 HTML，封装可重用的代码。

组件是自定义元素(对象)

### 2. 定义组件的方式

方式一：先创建组件构造器(Vue.extend)，由组件构造器创建组件(Vue.compoent)。

方式二：直接创建组件(Vue.compoent)

### 3. 组件的分类

分类：全局组件、局部组件

### 4. 引用模板

将组件的内容放到模板 `<template></template>` 标签中

`<template></template>` 标签中只能有，并且只能有一个根元素

### 5. 动态组件

`<component :is="componentID"></component>` 组件，多个组件使用同一个挂载点，然后动态的在它们之间切换显示，__每次都会重新渲染创建组件__。 [component](https://cn.vuejs.org/v2/api/#component)

`<keep-alive></keep-alive>` 组件，用来保存当前非活动组件，__可以保留状态，避免重新渲染__。
