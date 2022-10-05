import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import(/* webpackChunkName: "Dashboard" */ '../../pages/Dashboard.vue')
    },
    {
      path: '/calculator',
      name: 'calculator',
      component: () => import(/* webpackChunkName: "Calculator" */ '../../pages/VCalc.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "About" */ '../../pages/About.vue')
    },
    {
      path: '/404',
      name: 'NotFound',
      component: () => import(/* webpackChunkName: "NotFound" */ '../../pages/NotFound.vue')
    },
    {
      path: '/:operation/payment/:category/',
      name: 'addPayment',
      component: () => import(/* webpackChunkName: "Dashboard" */ '../../pages/Dashboard.vue')
    },
    {
      path: '*',
      redirect: { name: 'NotFound' }
    }
  ]
})
const getTitleByRouteName = routeName => {
  return {
    addPayment: 'Add payment',
    NotFound: '404',
    dashboard: 'Dashboard',
    calculator: 'Calculator',
    about: 'About'
  }[routeName]
}

router.afterEach((to) => {
  document.title = getTitleByRouteName(to.name)
})
export default router
