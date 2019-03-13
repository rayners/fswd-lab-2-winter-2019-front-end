<template>
  <div class="columns">
    <div class="column is-one-quarter">
    <aside class="menu">
      <ul class="menu-list">
        <li><router-link to="/tasks" exact-active-class="is-active">Overall</router-link></li>
        <li><router-link to="/tasks/completed" active-class="is-active">Completed</router-link></li>
        <li><router-link to="/tasks/incomplete" active-class="is-active">Incomplete</router-link></li>
      </ul>
    </aside>
    </div>
    <router-view class="column"></router-view>
  </div>
</template>

<script>
import axios from 'axios';
import TaskList from './TaskList.vue';
import { mapState } from 'vuex';

export default {
  components: { TaskList },

  data() {
    return {
      list: 'overall'
    };
  },

  computed: {
  },

  methods: {
    setList(list) {
      this.list = list;
    }
  }
}
</script>

