import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [

   {
      path: '/home',
      component:()=>import('@/views/K_H.vue'),
      redirect:'/headPage',
      children:[
         {
            path:'headPage',
            component:()=>import('@/views/container/head_Page.vue')
         },
         {
            path:'perCenter',
            component:()=>import('@/views/container/person_Center.vue')
         },
         {
            path:'PerMessage',
            component:()=>import('@/views/container/person_Message.vue')
         }
      ]
   },
   {
      path: '/',
      component: ()=>import('@/views/Login.vue')
   },
   

]

const router = new VueRouter({
   routes
})

export default router
