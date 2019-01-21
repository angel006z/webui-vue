import Vue from 'vue'
import Router from 'vue-router'
import ChargeIndex from '@/components/ChargeIndex'
import AboutContactUs from '@/components/AboutContactUs'
import AboutCommpany from '@/components/AboutCommpany'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ChargeIndex',
      component: ChargeIndex
    },
   {
      path: '/about-contact-us',
      name: 'AboutContactUs',
      component: AboutContactUs
    },
   {
      path: '/about-commpany',
      name: 'AboutCommpany',
      component: AboutCommpany
    }
  ]
})
