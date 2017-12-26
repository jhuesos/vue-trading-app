import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/Home';
import Portfolio from '../components/Portfolio';
import Stocks from '../components/Stocks';
import Signup from '../components/Signup';
import Login from '../components/Login';
import store from '../store';

Vue.use(Router);

const redirectIfNotLoggedIn = (to, from, next) => {
  if (!store.getters.isUserLoggedIn) {
    next({ path: '/login' });
    return;
  }

  next();
};

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      beforeEnter: redirectIfNotLoggedIn,
    },
    {
      path: '/stocks',
      name: 'Stocks',
      component: Stocks,
      beforeEnter: redirectIfNotLoggedIn,
    },
    {
      path: '/portfolio',
      name: 'Portfolio',
      component: Portfolio,
      beforeEnter: redirectIfNotLoggedIn,
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
  ],
});

export default router;
