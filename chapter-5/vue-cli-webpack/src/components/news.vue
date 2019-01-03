<style lang="">
    
</style>

<template>
    <div>
        <h4>这是新闻 news.vue</h4>
        <p>传递过来的参数为: {{ params }}</p>
    </div>
</template>

<script>
    export default {
        name: 'news',
        data() {
            return {
                params: ''
            }
        },
        mounted() {
            this.params = this.$route.params;
        }
    }
</script>