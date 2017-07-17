import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import TodoList from '@/components/TodoList';
import Index from '@/pages/Index';
import Cart from '@/pages/Cart';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    },
    {
      path: '/todolist',
      name: 'TodoList',
      component: TodoList,
    },
    {
      path: '/index',
      name: 'Index',
      component: Index,
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart,
    },
  ],
});
