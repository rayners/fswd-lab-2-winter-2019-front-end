<template>
<div>
    <input v-model="newTask" type="text">
    <button @click="addTask">Add task!</button>
</div>
</template>

<script>
export default {
    name: 'AddTask',
    data() {
        return {
            newTask: ''
        };
    },

    methods: {
        addTask() {
            this.$store.dispatch('addtask', this.newTask);
            this.newTask = '';
            this.$router.push('/');
        }
    }
}
</script>