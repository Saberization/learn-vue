## 一、angular 与 vue 的对比

### angular 实现 Hellow World

```js
const app = angular.module('myApp', []);

app.controller('myController', ['$scope', function($scope) {
    $scope.msg = 'Hellow World';
}]);
```

```html
<html ng-app="myApp">
    <body>
        <div ng-controller="myController">
            {{msg}}  // 在 angular {{}} 叫做 表达式
        </div>
    </body>
</html>
```

### vue 实现 Hellow World

```js
new Vue({
    el: 'myApp',
    data: {
        msg: 'Hellow World'
    }
});
```

```html
<div id="myApp">
    {{msg}}  // {{}} 这个在 vue 里叫 模板
</div>
```

## 二、指令

### 1. 什么是指令

> 用来扩展html标签的功能

#### angular中的常见指令：

```js
ng-model
ng-repeat
ng-show/ng-hide
ng-click
ng-if
```

#### vue中常见指令：

+ v-mode：双向数据绑定，一般用于表单元素 `input`、`select`、`textarea`、`components`
+ v-for：对数组或对象进行循环操作
+ v-on：绑定事件，用法：v-on:事件="函数"
+ v-show/v-if：用来显示/隐藏元素元素
    - v-show 是采用给目标元素添加 `display: none` 来控制元素的显隐
    - v-if 是采用将目标元素从 dom 树中添加、删除来控住元素的显隐

## 三、事件和属性

### 1. 事件

#### 1.1 事件简写

```js
v-on:click=""
// 简写方式可改为
@click=""
```
#### 1.2 事件对象 $event

包含事件相关信息，如事件源、事件类型、偏移量、target、type、offset等

#### 1.3 事件冒泡

阻止事件冒泡：

    + 原生js方式，依赖事件对象
    + vue方式，不依赖事件对象，只需添加修饰符即可

例如阻止事件冒泡 vue 方式写法：

```
@click.stop=""
```

[更多方式修饰符](https://cn.vuejs.org/v2/api/#v-on)

#### 1.4 事件默认行为

阻止事件默认行为：

```js
@click.prevent="";
```

#### 1.5 键盘事件

```js
// 按下回车键 回车键的keyCode为13，可以直接在@keypress后面跟13，如果不知道可以用@keypress后面跟enter.
@keypress.13="";
@keypress.enter="";

// 如果按的是↑，↑的keyCode是38，可以写为
@keypress.38="";
@keypress.up="";
```

默认没有 `@keydown.a/b/c...` 事件，可以自定义键盘事件，也称为自定义键码或自定义键位别名 `Vue.config.keyCodes` [详细使用方法](https://cn.vuejs.org/v2/api/#keyCodes)

#### 1.6 事件修饰符

+ stop - 调用 event.stopPropagation()。
+ prevent - 调用 event.preventDefault()。
+ {keyCode | keyAlias} - 只当事件是从特定键触发时才触发回调。
+ native - 监听组件根元素的原生事件。
+ once - 只触发一次回调。

### 2. 属性

#### 2.1 属性的绑定和属性的简写

`v-bind` 用于属性绑定，`v-bind:属性=""`

`v-bind:src=""`、`v-bind:class`、`v-bind:style` 可以简写为：`:src=""`、`:class=""`、`:style=""`

#### 2.2 class和style属性

设置 `classname`

```css
.text {
    color: #f00;
    font-size: 16px;
}

.cc {
    background-color: #333;
}
```

```html
<!-- 在使用Vue绑定属性时，不能直接使用css样式，所以这样是会报错的 -->
<p :class="text">Saber</p>

<!-- 方式一、通过变量绑定 -->
<p :class="cls">Saber</p>

<!-- 方式二、可以传一个数组，同时使用 -->
<p :class="[cls, bg]">Saber</p>

<!-- 方式三、json格式数据 !!! 这个是最常用的方式(牢记)，key 为 clssname，值为 Boolean，值为 true 的时候，代表使用这个clssname，为 false，代表不使用这个 classname -->
<p :class="{text: flag1, cc: flag2}">Saber</p>

<!-- 当 num > 0 的时候使用 cc -->
<p :class="{text: flag1, cc: num > 0 ? true : false}"></p>

<!-- 方式四、采用 json 数据传入  -->
<p :class="stylus">Saber</p>
```

```js
new Vue({
    el: '#app',
    data: {
        cls: 'text',
        bg: 'cc',
        flag1: true,
        flag2: false,
        num: 3,
        stylus: {
            text: true,
            cc: true
        }
    }
});
```