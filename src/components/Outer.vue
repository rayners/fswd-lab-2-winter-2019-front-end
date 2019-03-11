<template>
    <TaskList v-bind:tasks="tasks"></TaskList>
</template>

<script>
import axios from 'axios';
import TaskList from './TaskList.vue';
import { mapState } from 'vuex';

import tasks from '../tasks';

export default {
  components: { TaskList },

  computed: mapState(['tasks'])
}
</script>

