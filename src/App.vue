<template>
  <div id="app">
    <section class="section">
      <div class="container">
        <div class="tabs is-centered">
          <ul>
            <router-link to="/tasks" tag="li" active-class="is-active">
              <a>Tasks</a>
            </router-link>
            <router-link v-if="isLoggedIn" to="/add" tag="li" active-class="is-active">
              <a>Add a task</a>
            </router-link>
            <router-link v-if="!isLoggedIn" to="/register" tag="li" active-class="is-active">
              <a>Register</a>
            </router-link>
            <router-link v-if="!isLoggedIn" to="/login" tag="li" active-class="is-active">
              <a>Login</a>
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

  computed: mapGetters(['numberOfTasks', 'isLoggedIn']),

  mounted() {
    this.$store.dispatch('loadtasks');
    this.$store.dispatch('loadcurrentuser');
  }

}
</script>