import '../styles/mobile.scss';
import * as example from './example.js';
import Vue from 'vue';

example.sayHello();

console.log('Eureka! It worked!');

let app = new Vue({
  el: '#content',
  data: {
    pageContent: 'Hey there!',
  },
});

module.exports = {
  app: app,
};
