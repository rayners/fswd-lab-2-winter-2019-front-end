<template>
<div>
    <p v-if="error">{{error}}</p>
    <input v-model="newTask" type="text">
    <button @click="addTask">Add task!</button>
</div>
</template>

<script>
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

    beforeRouteEnter(to, from, next) {
        // next(vm => {
        //     if (vm.$store.getters.isLoggedIn) {
        //         return true;
        //     } else {
        //         return false;
        //     }
        // });
        next();
    }
}
</script>