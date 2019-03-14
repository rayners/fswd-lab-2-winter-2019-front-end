import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
      tasks: [],
      user: null
    },
    mutations: {
      addTask(state, payload) {
        state.tasks.push(payload);
      },
      addTasks(state, payload) {
        state.tasks.push(...payload);
      },
      setTasks(state, payload) {
        state.tasks = payload;
      },
      setUser(state, user) {
        state.user = user;
      }
    },
    getters: {
      numberOfTasks: state => state.tasks.length,
      isLoggedIn: state => !!state.user,

      incompleteTasks: state => state.tasks.filter(task => !task.completedAt),
      completedTasks: state => state.tasks.filter(task => task.completedAt)
    },
    actions: {
      loadcurrentuser(store) {
        axios.get('/users/current')
          .then(response => {
            store.commit('setUser', response.data);
          });
      },
      loadtasks(store) {
        axios.get('/tasks')
          .then(response => {
            store.commit('setTasks', response.data);
          });
      },
      addtask(store, payload) {
        return axios.post('/tasks', { task: payload })
          .then(response => {
            store.commit('addTask', response.data);
          });
      },
      register(store, payload) {
        axios.post('/users/register', payload)
          .then(response => {
            store.commit('setCurrentUser', response.data)
          });        
      },
      login(store, payload) {
          return axios.post('/users/login', payload)
            .then(response => {
                store.commit('setCurrentUser', response.data);
            });
      }
    }
  });
  
  export default store;