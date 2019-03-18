<template>
<div>
    <p v-if="error">{{error}}</p>
    <input v-model="newTask" type="text">
    <button @click="addTask">Add task!</button>
</div>
</template>

<script>
import store from '../store';

export default {
    name: 'AddTask',
    data() {
        return {
            newTask: '',
            error: null
        };
    },

    methods: {
        addTask() {
            this.$store.dispatch('addtask', this.newTask)
                .then(
                    () => {
                        this.newTask = '';
                        this.$router.push('/');
                    },
                    (error) => {
                        this.error = error.response.data.error;
                    }
                );
        }
    },

    // beforeRouteEnter(to, from, next) {
    //     if (store.state.user) {
    //         next();
    //     } else {
    //         next('/tasks/incomplete');
    //     }
    // },

    beforeRouteLeave(to, from, next) {
        if (!this.newTask || confirm('You still have a task to add! Leave the page?')) {
            next();
        }
    }
}
</script>