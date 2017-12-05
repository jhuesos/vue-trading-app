import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/Home';
import Portfolio from '../components/Portfolio';
import Stocks from '../components/Stocks';

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
