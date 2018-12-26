<style lang="scss" scoped> /* scope 表示样式只在当前组件中有效 */
    h2 {
        color: #f00;
    }
</style>

<template>
    <div class="user">
        <h2>用户列表</h2>
        <ul>
            <li v-for="v in users">{{v}}</li>
        </ul>

        <h3>接收父组件传递来的参数：{{username}}</h3>
        <button @click="emitValue">传递给父组件值</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            users: ['saber', 'rin', 'eriri']
        }
    },
    props: {
        username: String
    },
    methods: {
        emitValue() {
            this.$emit('evt-value', this.users);
        }
    },
}
</script>