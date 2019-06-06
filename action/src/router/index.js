import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout'
import HelloWorld from '@/views/HelloWorld'
import Login from '@/views/login'
import play from '@/views/play'
import playItem from '@/views/playItem'
import game from '@/views/game'
import person from '@/views/person'
import personSearch from '@/views/personSearch'
import systemNotice from '@/views/systemNotice'
import message from '@/views/message'
import setting from '@/views/setting'
import oppenGame from '@/views/oppenGame'
import setModel from '@/views/setModel'
import setModelCard from '@/views/setModelCard'
import personPayment from '@/views/personPayment'
import pay from '@/views/pay'

Vue.use(Router)

export default new Router({
  routes:[

    {
      path: '/',
      redirect: '/helloWorld',
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/helloWorld',
      component: Layout,
      name: 'helloWorld',
      redirect:'helloWorld',
      meta:{title:'舆情数据',isFlag:false,role:''},
      children:[{
        path:'',
        component: HelloWorld,
        meta:{title:'舆情数据'},
      }]

    },
    {
      path: '/play',
      component: Layout,
      name: 'play',
      redirect:'play',
      meta:{title:'舆情数据',isFlag:false,role:''},
      children:[{
        path:'',
        component: play,
        meta:{title:'舆情数据'},
      }]

    },
    {
      path: '/playItem',
      component: playItem,
      name: 'playItem',


    },
    {
      path: '/game',
      component: Layout,
      name: 'game',
      redirect:'game',
      meta:{title:'舆情数据',isFlag:false,role:''},
      children:[{
        path:'',
        component: game,
        meta:{title:'舆情数据'},
      }]

    },
    {
      path: '/person',
      component: Layout,
      name: 'person',
      redirect:'person',
      meta:{title:'舆情数据',isFlag:false,role:''},
      children:[{
        path:'',
        component: person,
        meta:{title:'舆情数据'},
      }]

    },  {
      path: '/personSearch',
      component: personSearch,
      name: 'personSearch',


    },
    {
      path: '/systemNotice',
      component: systemNotice,
      name: 'systemNotice',


    },
    {
      path: '/message',
      component: message,
      name: 'message',


    }, {
      path: '/setting',
      component: setting,
      name: 'setting',


    }, {
      path: '/setModel',
      component: setModel,
      name: 'setModel',


    }, {
      path: '/setModelCard',
      component: setModelCard,
      name: 'setModelCard',


    }, {
      path: '/oppenGame',
      component: oppenGame,
      name: 'oppenGame',


    },
{
      path: '/personPayment',
      component: personPayment,
      name: 'personPayment',


    },
{
      path: '/pay',
      component: pay,
      name: 'pay',


    }

  ]
})
