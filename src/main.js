import Vue from 'vue'
import App from './App.vue';

import VueRouter from 'vue-router';
import Vuex from 'vuex';

import axios from 'axios';

Vue.use(VueRouter);
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    tasks: [],
    user: {}
  },
  mutations: {
    addTask(state, payload) {
      state.tasks.push(payload);
    },
    addTasks(state, payload) {
      state.tasks.push(...payload);
    }
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
    },
    register(store, payload) {
      axios.post('/users/register', payload)
        .then(response => {
          store.commit('setCurrentUser', response.data)
        });        
    }
  }
});

import Outer from './components/Outer.vue';
import AddTask from './components/AddTask.vue';
import Task from './components/Task.vue';
import Register from './components/Register.vue';

require('./assets/sass/main.scss');

Vue.config.productionTip = false

const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/tasks' },
    { path: '/tasks', component: Outer },
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
