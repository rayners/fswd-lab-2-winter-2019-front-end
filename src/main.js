import Vue from 'vue'
import App from './App.vue';

import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Outer from './components/Outer.vue';
import AddTask from './components/AddTask.vue';
import Task from './components/Task.vue';

Vue.config.productionTip = false

const router = new VueRouter({
  routes: [
    { path: '/', component: Outer },
    { path: '/add', component: AddTask },
    { path: '/tasks/:id', component: Task }
  ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
