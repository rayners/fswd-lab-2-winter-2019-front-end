import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
      tasks: [],
      user: null,
      currentTask: null
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
      },
      updateTask(state, payload) {
        const taskIndex = state.tasks.findIndex(task => task.id === payload.id);
        Vue.set(state.tasks, taskIndex, payload);
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
            store.commit('setUser', response.data)
          });        
      },
      login(store, payload) {
          return axios.post('/users/login', payload)
            .then(response => {
                store.commit('setUser', response.data);
            });
      },
      completetask(store, payload) {
        return axios.post(`/tasks/${payload.id}/complete`)
          .then(response => {
            store.commit('updateTask', response.data);
          })
      },
      loadtask(store, payload) {
        return axios.get(`/tasks/${payload}`)
          .then(response => store.commit('setCurrentTask', response.data));
      }
    }
  });
  
  export default store;