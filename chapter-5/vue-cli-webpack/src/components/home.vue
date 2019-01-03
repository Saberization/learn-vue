<style lang="">
    
</style>

<template>
    <div>
        <h4>主页 home.vue</h4>
        <p>传递过来的参数为: {{ params }}</p>
    </div>
</template>

<script>
    export default {
        name: 'home',
        data() {
            return {
                params: ''
            }
        },
        mounted() {
            this.params = this.$route.query;
        },
    }
</script>
