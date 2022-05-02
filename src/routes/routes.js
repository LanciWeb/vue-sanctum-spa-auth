import Vue from 'vue';
import VueRouter from 'vue-router';

// pagine
import HomePage from '../pages/HomePage.vue';
import LoginPage from '../pages/LoginPage.vue';

// middleware
import auth from './middlewares/auth';

Vue.use(VueRouter);

// definizione rotte
const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: HomePage, name: 'home', beforeEnter: auth.user },
    { path: '/login', component: LoginPage, name: 'login', beforeEnter: auth.guest },
  ]
});

export default router;