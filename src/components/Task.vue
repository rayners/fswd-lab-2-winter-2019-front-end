<template>
<div class="content">
    <p v-if="error">{{error}}</p>
    <h1>{{ task.name }}</h1>
    <p v-if="task.UserId">Task has a user</p>
    <p v-if="!task.UserId">Task has no user</p>

    <button class="button is-primary" v-if="canComplete" @click="complete">Complete!</button>
    <p v-if="task.completedAt">Task complete!</p>
</div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            task: {},
            error: null
        };
    },
    computed: {
        canComplete() {
            return !this.task.completedAt &&
                (
                    this.$store.state.user &&
                    this.$store.state.user.id === this.task.UserId
                );
        }
    },
    methods: {
        complete() {
            this.$store.dispatch('completetask', this.task)
                .then(
                    () => this.$router.push('/tasks'),
                    (error) => this.error = error.response.data.error
                )
        }
    },
    mounted() {
        axios.get(`/tasks/${this.$route.params.id}`)
            .then(response => {
                this.task = response.data;
            });
    }
}
</script>

<style>

</style>
