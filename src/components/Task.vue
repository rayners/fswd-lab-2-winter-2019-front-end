<template>
<div class="content">
    <h1>{{ task.name }}</h1>
    <p v-if="task.UserId">Task has a user</p>
    <p v-if="!task.UserId">Task has no user</p>

    <button v-if="!task.completedAt">Complete!</button>
</div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            task: {}
        };
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
