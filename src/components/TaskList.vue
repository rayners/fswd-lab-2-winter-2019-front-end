<template>
<div>
    <ul>
        <li v-for="task in tasks"><router-link v-bind:to="'/tasks/' + task.id">{{task.name}}</router-link></li>
    </ul>
    <p>There are {{ numberOfTasks }} tasks.</p>
</div>
</template>

<script>
export default {
    name: 'TaskList',
    props: ['tasks'],

    computed: {
        numberOfTasks() {
            // if (this.tasks) {
            //     return this.tasks.length;
            // } else {
            //     return 0;
            // }
            return this.tasks ? this.tasks.length : 0;
        }
    }
};
</script>