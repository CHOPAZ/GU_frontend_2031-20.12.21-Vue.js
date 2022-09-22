import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../../pages/Dashboard'
import About from '../../pages/About'
import VCalc from '../../pages/VCalc'
import NotFound from '../../pages/NotFound'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/calculator',
      name: 'calculator',
      component: VCalc
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/404',
      name: 'NotFound',
      component: NotFound
    },
    {
      path: '/:operation/payment/:category/',
      name: 'addPayment',
      component: Dashboard
    },
    {
      path: '*',
      redirect: { name: 'NotFound' }
    }
  ]
})
const getTitleByRouteName = routeName => {
  return {
    dashboard: 'Dashboard',
    calculator: 'Calculator',
    about: 'About'
  }[routeName]
}

router.afterEach((to) => {
  document.title = getTitleByRouteName(to.name)
})
export default router
