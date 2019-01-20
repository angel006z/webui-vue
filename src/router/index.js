import Vue from 'vue'
import Router from 'vue-router'
import ChargeIndex from '@/components/ChargeIndex'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ChargeIndex',
      component: ChargeIndex
    }
  ]
})
