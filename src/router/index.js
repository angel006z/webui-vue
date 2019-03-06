import Vue from 'vue'
import Router from 'vue-router'
import ChargeIndex from '@/components/charge-index'
import AboutContactUs from '@/components/about-contact-us'
import AboutCommpany from '@/components/about-commpany'

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
