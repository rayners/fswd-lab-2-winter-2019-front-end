import Vue from 'vue'
import App from './App.vue';

import VueRouter from 'vue-router';
import Vuex from 'vuex';

import axios from 'axios';

Vue.use(VueRouter);
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    tasks: []
  },
  mutations: {
    addTask(state, payload) {
      state.tasks.push(payload);
    },
    addTasks(state, payload) {
      state.tasks.push(...payload);
    }
    // addPendingTask(state, payload) {
    //   state.tasks.push({ name: payload, id: 'pending', _isPending: true })
    // },
    // commitPendingTask(state, payload) {
    //   for(var i = 0; i < state.tasks.length; i++) {
    //     if (state.tasks[i]._isPending) {
    //       state.tasks[i] = payload;
    //       break;
    //     }
    //   }
    // }
  },
  getters: {
    numberOfTasks: state => state.tasks.length
  },
  actions: {
    loadtasks(store) {
      axios.get('/tasks')
        .then(response => {
          store.commit('addTasks', response.data);
        });
    },
    addtask(store, payload) {
      axios.post('/tasks', { task: payload })
        .then(response => {
          store.commit('addTask', response.data);
        });
    }
  }
});

import Outer from './components/Outer.vue';
import AddTask from './components/AddTask.vue';
import Task from './components/Task.vue';
import Register from './components/Register.vue';

Vue.config.productionTip = false

const router = new VueRouter({
  routes: [
    { path: '/', component: Outer },
    { path: '/add', component: AddTask },
    { path: '/tasks/:id', component: Task },
    { path: '/register', component: Register }
  ]
});

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app');
