import Vue from 'vue'
import App from './App.vue';

import store from './store';

import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Outer from './components/Outer.vue';
import AddTask from './components/AddTask.vue';
import Task from './components/Task.vue';
import TaskList from './components/TaskList.vue';
import Register from './components/Register.vue';
import Login from './components/Login.vue';

require('./assets/sass/main.scss');

Vue.config.productionTip = false

const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/tasks' },
    { path: '/tasks', component: Outer,
      children: [
        { path: '', component: TaskList, props: { list: 'overall' } },
        { path: 'completed', component: TaskList, props: { list: 'completed' }},
        { path: 'incomplete', component: TaskList, props: { list: 'incomplete' }}
      ]
    },
    { path: '/add', component: AddTask, meta: { requireAuth: true } },
    { path: '/tasks/:id', component: Task },
    { path: '/register', component: Register },
    { path: '/login', component: Login }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    if (store.state.user) {
      next();
    } else {
      next(false);
    }

  } else {
    next();
  }
});

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app');
