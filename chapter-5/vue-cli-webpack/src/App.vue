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
    <!-- <myButton @click.native="send"></myButton> -->

    <hr />

    <button @click="increment">增加</button>
    <button @click="less">减少</button>
    <button @click="incrementAsync">增加async</button>
    <p>当前数字：{{count}}</p>
    <p>{{ isEvenOdd }}</p>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import myButton from './components/myButton'

import  { mapGetters, mapActions, mapState } from 'vuex'

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
  // 方式1: 通过 `this.$store` 访问
  // computed: {
  //   count() {
  //     return this.$store.state.count
  //   }
  // },
  
  // 方式2: 通过 mpGetters 访问 store 中的数据
  // computed: mapGetters([
  //   'count'
  // ]),
  // 方式3：通过 mpState 访问 store 中的数据
  // computed: mapState([
  //   'count'
  // ]),
  computed: mapGetters([
    'count',
    'isEvenOdd'
  ]),
  methods: mapActions([
    'increment',
    'less',
    'incrementAsync'
  ]),
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
