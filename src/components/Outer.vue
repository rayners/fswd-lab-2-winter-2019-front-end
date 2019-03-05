<template>
    <TaskList v-bind:tasks="tasks"></TaskList>
</template>

<script>
import axios from 'axios';
import TaskList from './TaskList.vue';

export default {
    components: { TaskList },
  data() {
    return {
      tasks: []
    };
  },
  methods: {
    addedtask(newTask) {
      this.tasks.push(newTask);
    },
    loadtasks() {
      axios.get('/tasks')
        .then(response => {
          this.tasks = response.data;
        })
    }
  },
  mounted() {
    this.loadtasks();
  }
}
</script>

