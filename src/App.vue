<template>
  <div id="app">
    <section class="section">
      <div class="container content">
        <div class="tabs is-centered">
          <ul>
            <router-link to="/tasks" tag="li" active-class="is-active">
              <a>Tasks</a>
            </router-link>
            <router-link to="/add" tag="li" active-class="is-active">
              <a>Add a task</a>
            </router-link>
            <router-link to="/register" tag="li" active-class="is-active">
              <a>Register</a>
            </router-link>
          </ul>
        </div>
        <router-view></router-view>
        <p>There are currently {{ numberOfTasks }} tasks.</p>
      </div>
    </section>
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