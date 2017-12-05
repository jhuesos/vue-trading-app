import Vue from 'vue';
import Router from 'vue-router';
import Home from '../pages/Home';
import Portfolio from '../pages/Portfolio';
import Stocks from '../pages/Stocks';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/stocks',
      name: 'Stocks',
      component: Stocks,
    },
    {
      path: '/portfolio',
      name: 'Portfolio',
      component: Portfolio,
    },
  ],
});
