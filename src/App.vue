<template>
  <div id="app">
    <router-link to="/">Tasks</router-link>
    <router-link to="/add">Add a task</router-link>
    <router-view></router-view>
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <TaskList v-bind:tasks="tasks"></TaskList>
    <button v-on:click="loadtasks">Load tasks</button>

    <AddTask v-on:new-task="addedtask"></AddTask> -->
  </div>
</template>

<script>
import TaskList from './components/TaskList.vue';
import AddTask from './components/AddTask.vue';
import axios from 'axios';

export default {
  name: 'app',

  components: {
    TaskList,
    AddTask
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

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
