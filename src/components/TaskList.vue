<template>
<div class="content">
    <p>List of {{ title }} tasks</p>
    <ul>
        <li v-for="task in tasks" v-bind:key="task.id"><router-link v-bind:to="'/tasks/' + task.id">{{task.name}}</router-link></li>
    </ul>
    <p>There are {{ numberOfTasks }} {{ title }} tasks.</p>
</div>
</template>

<script>
export default {
    name: 'TaskList',
    // props: ['tasks', 'title'],
    props: ['list'],

    computed: {
        title() {
            return this.list;
        },
        tasks() {
          if (this.list === 'overall') {
            return this.$store.state.tasks;
          } else if (this.list === 'incomplete') {
            return this.$store.getters.incompleteTasks;
          } else {
            return this.$store.getters.completedTasks;
          }
        },
        numberOfTasks() {
            return this.tasks ? this.tasks.length : 0;
        }
    }
};
</script>