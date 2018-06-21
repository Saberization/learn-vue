## 一、发送 AJAX 请求

### 1.简介

vue 本身不支持发送ajax请求，需要使用vue-resource(在vue2.0 中已不在更新)、axios(vue2.0 中推荐使用)等插件实现

axios 是基于 Promise 的 HTTP 请求客户端，用来发送请求，也是 vue2.0 官方推荐使用的，同时在vue2.0中不在对 vue-resource 进行维护升级。

参考：[https://github.com/axios/axios](https://github.com/axios/axios)

### 2.使用axios发送ajax请求

#### 2.1 安装axios并引入

```
npm install --save-dev axios

也可以直接下载 axios.min.js 文件
```

#### 2.2 基本用法

```
axios([options])
axios.get(url, [,options])
    传参方式：
        1. 通过url传参
        2. 通过选项参数params传参，他会自动将参数拼接到url上
axios.post(url, data, [options])
```

`axios` 本身不支持发送跨域请求，没有响应的API，作者暂时也没计划在 `axios` 中添加支持发送跨域请求，所以只能使用第三方库。

### 3. 使用 vue-resource 进行跨域请求。

#### 3.1 安装 vue-resource 并引入

```
npm install --save-dev vue-resource
```

#### 3.2 基本用法

使用 `this.$http` 发送请求

    this.$http.get(url, [config])
    this.$http.head(url, [config])
    this.$http.delete(url, [config])
    this.$http.jsonp(url, [config])
    this.$http.post(url, [body], [config])
    this.$http.put(url, [body], [config])
    this.$http.patch(url, [body], [config])

注意：JSONP，修改 callback 参数名，传入 `jsonp` 可以去修改

```js
{
    jsonp: 'cb'
}
```

#### 4. 练习

百度搜索列表