
import 'bootstrap/dist/css/bootstrap.min.css';
import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import App from './App.vue';
import Router from 'vue-router';
import Home from './views/home';
import Signup from './views/signup';
import Login from './views/login';
import Dash from './views/home';
import Food from './views/food';
import Accom from './views/accom';
import POI from './views/poi';
import Attraction from './views/attraction';
import { L } from 'vue2-leaflet';
import 'leaflet/dist/leaflet.css';
import AuthStore from'./stores/AuthStore';

// this part resolve an issue where the markers would not appear

Vue.use(BootstrapVue);
Vue.use(Router);

const routes = [
    {path: '/', component: Home},
    {path: '/sign-up', component: Signup},
    {path: '/log-in', component: Login},
    {path: '/dash', 
    component: Dash,
      meta: { 
        requiresAuth: true
      }
    },
    {path: '/food', component: Food},
    {path: '/accom', component: Accom},
    {path: '/poi', component: POI},
    {path: '/attraction', component: Attraction},
    ];
    
const router = new Router({routes});

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)){
    
    if (!AuthStore.state.user) {
      next('/log-in');
    } else {
      next();
    }
  } else {
    next();
  }
  });

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
