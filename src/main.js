import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import { routes } from './routes'
import VueParticles from 'vue-particles'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(VueParticles);

const router = new VueRouter({
  mode: 'history', // the server should always response with index.html
  routes
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
