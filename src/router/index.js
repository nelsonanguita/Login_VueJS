import Vue from 'vue'
import VueRouter from 'vue-router'

import {auth} from '../firebase/init'

Vue.use(VueRouter)
  const routes = [

    {
      path: '/login',
      name: 'login',
      component: () => import('../components/Login.vue')
    },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('../components/Signup.vue')
  },
  {
    path: '/tomarhora',
    name: 'tomarhora',
    component: () => import('../components/TomarHora.vue')
  },

  {
    path: '/forgot-password',
    name: 'forgot-password',
    component: () => import('../components/ForgotPassword.vue')
  },
  {
    path: '/calendar',
    name: 'calendar',
    component: () => import('../components/Calendar.vue')
  },
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue'),
    meta: { requiresAuth: true }

  },
  {
    path: '/fichausuario',
    name: 'fichausuario',
    component: () => import('../views/FichaUsuario.vue'),
    meta: { requiresAuth: true }

  },
  {
    path: '/fichausuariocopy',
    name: 'fichausuariocopy',
    component: () => import('../views/FichaUsuariocopy.vue'),
    meta: { requiresAuth: true }

  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {

    const usuario = auth.currentUser
    console.log(usuario)

    if (!usuario) {
      next({
        path: '/login'
      })
    } else if(usuario) {
      console.log("HOME")
      next()
    }

  } else {
    next()
    console.log("OTRO")

  }
})




export default router
