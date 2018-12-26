import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import '../fonts/iconfont.css';
import Index from '../components/index';
import Register  from '../components/register';

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path: '/index',
      name: 'Index',
      component: Index
    },{
      path: '/register',
      name: 'Register',
      component: Register
    }
  ]
})
