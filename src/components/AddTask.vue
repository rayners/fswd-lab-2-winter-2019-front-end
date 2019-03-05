<template>
<div>
    <input v-model="newTask" type="text">
    <button @click="addTask">Add task!</button>
</div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'AddTask',
    data() {
        return {
            newTask: ''
        };
    },

    methods: {
        addTask() {
            // console.log(`Adding ${this.newTask}`);
            axios.post('/tasks', { task: this.newTask })
                .then(response => {
                    this.$emit('new-task', response.data);
                    this.newTask = '';
                });
        }
    }
}
</script>