import '@popperjs/core'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap'
import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/HomeScreen.vue';
import Category from './components/CategoryScreen.vue';
import Product from './components/ProductScreen.vue';
import Sell from './components/SellScreen.vue';

const routes = [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
        path: '/categories',
        name: 'Categories',
        component: Category
    },
    {
        path: '/products',
        name: 'Products',
        component: Product
    },
    {
        path: '/sell',
        name: 'Sell',
        component: Sell
    },
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes
  });

  
  const app = createApp(App);
  app.use(router);
  app.use(vuetify);
  app.mount('#app');
  
