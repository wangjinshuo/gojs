import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import MainWin from '../components/MainWin'
import USEFTA from '../components/USEFTA'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainWin',
      component: MainWin,
      children: [
        {
          path: '/',
          name: 'USEFTA',
          component: USEFTA
        }
      ]

    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
