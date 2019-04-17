import 'bootstrap/dist/css/bootstrap.min.css'
import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import Home from './views/home'
import Signup from './views/signup'
import Login from './views/login'

Vue.use(Router);

const routes = [
    {path: '/', component: Home},
    {path: '/sign-up', component: Signup},
    {path: '/log-in', component: Login},
    ];
    
    const router = new Router({routes});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
