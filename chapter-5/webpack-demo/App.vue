<style lang="scss">
    body {
        background-color: #f5f5f5;
    }
</style>

<template>
    <div id="app">
        <h2>{{name}}</h2>
        <h3>父组件接收子组件的指：{{users}}</h3>
        <user-list :username="name" @evt-value="getValue"></user-list>

        <button @click="changename">change name</button>
    </div>
</template>

<script>
    import User from './components/user.vue'

    export default {
        name: 'app',
        data() {
            return {
                name: 'saber',
                users: ''
            }
        },
        methods: {
            changename() {
                this.name = 'rin';
            },

            getValue(value) {
                this.users = value;
            }
        },
        components: {
            'user-list': User
        }
    }
</script>