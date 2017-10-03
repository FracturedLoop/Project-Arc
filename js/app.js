import '../styles/mobile.scss';
import * as example from './example.js';
import Vue from 'vue';
import VueRouter from 'vue-router';

// Import the pages
import home from './home';
import about from './about';

Vue.config.devtools = true;

Vue.use(VueRouter);

const routes = [
  {path: '/about', component: about},
  {path: '/', component: home},
];

const router = new VueRouter({
  routes,
});
example.sayHello();

console.log('Eureka! It worked!');

const app = new Vue({
  router,
}).$mount('#content');

module.exports = {
  app: app,
};
