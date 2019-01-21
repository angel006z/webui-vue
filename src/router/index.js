import Vue from 'vue'
import Router from 'vue-router'
import ChargeIndex from '@/components/ChargeIndex'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ChargeIndex',
      component: ChargeIndex
    },
   {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})
