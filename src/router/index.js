import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../components/Hello.vue'
import Map from '../components/Map.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/map',
      name: 'Map',
      component: Map
    }
  ]
})
