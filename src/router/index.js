import Vue from 'vue'
import VueRouter from 'vue-router'
import Film from '@/views/Film.vue'
import NowPlaying from '@/components/Film/NowPlaying.vue'
import ComingSoon from '@/components/Film/ComingSoon.vue'
import Cinema from '@/views/Cinema.vue'
import Detail from '@/views/Detail.vue'
import Center from '@/views/Center.vue'
import Login from '@/views/Login.vue'
import Service from '@/views/Service.vue'
import City from '@/views/City.vue'
import TicketPurchase from '@/views/TicketPurchase.vue'
import CinemaSearch from '@/components/Cinema/CinemaSearch.vue'

Vue.use(VueRouter)

const auth = {
  isLogin(){
    return false;
  }
}
const routes = [
  {
    path: '/film',
    name: 'Film',
    component: Film,
    children:[
      {
        path:'/film/nowplaying',
        name: 'NowPlaying',
        component:NowPlaying
      },
      {
        path:'/film/comingsoon',
        name: 'ComingSoon',
        component:ComingSoon,
      },
      {
        path:"/film",
        redirect:'/film/nowplaying'
      }
    ]
  },
  {
    path: '/cinema',
    name: 'Cinema',
    component:Cinema,
  },
  {
    path:"/cinema/search",
    name:'CinemaSearch',
    component:CinemaSearch,
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component:Detail
  },
  {
    path: '/detail/:id/cinema',
    name:'TicketPurchase',
    component:TicketPurchase,
  },
  {
    path: '/service',
    name: 'Service',
    component: Service
  },
  {
    path: '/center',
    name: 'Center',
    component: Center
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path:'/city',
    name: 'City',
    component: City
  },
  {
    path:"*",
    redirect:'/film/nowplaying'
  }

]

const router = new VueRouter({
  routes,
  mode:'history'
})



export default router
