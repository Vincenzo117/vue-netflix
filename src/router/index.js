import Vue from 'vue'
import VueRouter from 'vue-router'
import ChooseProfile from '@/views/ProfilesView/ChooseProfile.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/choose-profile'
  },
  {
    path: '/choose-profile',
    name: 'ChooseProfile',
    component: ChooseProfile
  },
  {
    path: '/create-new-profile',
    name: 'AddProfile',
    component: () => import('../views/ProfilesView/AddProfile.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
