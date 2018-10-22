import Vue from 'vue'
import Router from 'vue-router'
import FlyPigIndex from '../pages/FlyPigIndex.vue'
import GateTicket from '../pages/GateTicket.vue'
import AllType from '../pages/AllType.vue'
import Test from '../pages/Test.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'FlyPigIndex',
      component: FlyPigIndex
    },
    {
      path: '/GateTicket',
      name: 'GateTicket',
      component: GateTicket
    },
    {
      path: '/AllType',
      name: 'AllType',
      component: AllType 
    },
    {
      path: '/Test',
      name: 'Test',
      component: Test 
    }
  ]
})
