<template>
  <div id="app">
    <button @click="addCount">增加</button>
    {{count}} - {{price}}
    <button @click="lessCount">减少</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'App',
  computed: {
    ...mapGetters([
      'count',
      'price'
    ])
  },
  methods: {
    ...mapActions([
      'addCount',
      'lessCount'
    ])
  }
}
</script>

<style>
  button {
    background-color: #e1e1e1;
  }
</style>
