<template>
  <div id="app">
    <router-link to="/">Tasks</router-link>
    <router-link to="/add">Add a task</router-link>
    <router-link to="/register">Register</router-link>
    <router-view></router-view>
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <TaskList v-bind:tasks="tasks"></TaskList>
    <button v-on:click="loadtasks">Load tasks</button>

    <AddTask v-on:new-task="addedtask"></AddTask> -->

    <p>There are currently {{ numberOfTasks }} tasks.</p>
  </div>
</template>

<script>
import TaskList from './components/TaskList.vue';
import AddTask from './components/AddTask.vue';

import { mapGetters } from 'vuex';

import tasks from './tasks';

export default {
  name: 'app',

  components: {
    TaskList,
    AddTask
  },

  computed: mapGetters(['numberOfTasks']),

  mounted() {
    this.$store.dispatch('loadtasks');
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
