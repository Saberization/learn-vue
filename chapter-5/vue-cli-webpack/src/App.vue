<template>
  <div id="app">
    <img src="./assets/logo.png">
    <HelloWorld/>
    <h3>
      <router-link to="/home?username=saber">主页</router-link>
      <router-link to="/news/rin">新闻</router-link>
    </h3>

    <div>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>

    <Login></Login>

    <!-- 自定义组件事件，需要添加一个修饰符 .native，否则直接绑定的事件无法执行 -->
    <myButton @click.native="send"></myButton>

    <hr />

    <button>增加</button>
    <button>减少</button>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import myButton from './components/myButton'

export default {
  name: 'App',
  components: {
    HelloWorld,
    myButton
  },
  watch: {
    $route: function(newVal, oldVal) {
      console.log('路由发生变化，跳转到了: ' + newVal.path);
    }
  },
  methods: {
    send() {
      console.log('myButton');
    }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
