<template>
  <div id="app">
    <h2>{{ msg }}</h2>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      msg: '用户登录'
    }
  }
}
</script>

<style lang="" scoped>
  h2 {
    color: #f00;
  }
</style>