import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'

const router = createRouter({
  history: createWebHashHistory('/vue'),
  routes: [
    {
      path: '/vue',
      component: HomeView,
      name: 'home',
    },
    {
      path: '/vue/about',
      component: AboutView
    }
    
  ]
})

export default router
