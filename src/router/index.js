import Vue from 'vue'
import VueRouter from 'vue-router'

import {auth} from '../firebase/init'

Vue.use(VueRouter)
  const routes = [
    {
      path: '/',
      name: 'login',
      component: () => import('../components/Login.vue')
    },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('../components/Signup.vue')
  },

  {
    path: '/forgot-password',
    name: 'forgot-password',
    component: () => import('../components/ForgotPassword.vue')
  },
  {
    path: '/home',
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
    meta: { requiresAuth: false }

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
        path: '/'
      })
    } else {
      console.log("HOME")
      next()
    }

  } else {
    next()
  }
})


export default router
