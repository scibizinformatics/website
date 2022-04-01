import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    },
    {
      path: '/services',
      name: 'services',
      component: () => import('./views/Services.vue')
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('./views/Projects.vue')
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: () => import('./views/Jobs.vue')
    },
    {
      path: '/apply',
      name: 'apply',
      component: () => import('./views/Apply.vue')
    }
  ]
})
