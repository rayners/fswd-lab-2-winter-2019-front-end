<template>
<div>
    <p>List of tasks</p>
    <ul>
        <li v-for="task in tasks"><router-link v-bind:to="'/tasks/' + task.id">{{task.name}}</router-link></li>
    </ul>
    <p>There are {{ numberOfTasks }} tasks.</p>

    <p>List of incomplete tasks</p>
    <ul>
        <li v-for="task in incompleteTasks"><router-link v-bind:to="'/tasks/' + task.id">{{ task.name }}</router-link></li>
    </ul>

    <p>List of completed tasks</p>
    <ul>
        <li v-for="task in completedTasks"><router-link v-bind:to="'/tasks/' + task.id">{{ task.name }}</router-link></li>
    </ul>
</div>
</template>

<script>
export default {
    name: 'TaskList',
    props: ['tasks'],

    computed: {
        numberOfTasks() {
            return this.tasks ? this.tasks.length : 0;
        },
        incompleteTasks() {
            return this.tasks ? this.tasks.filter(task => !task.completedAt) : [];
        },
        completedTasks() {
            return this.tasks ? this.tasks.filter(task => task.completedAt) : [];
        }

    }
};
</script>