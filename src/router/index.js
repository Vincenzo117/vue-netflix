import Vue from 'vue'
import VueRouter from 'vue-router'
import ChooseProfile from '@/views/ProfilesView/ChooseProfile.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/choose-profile',
    name: 'ChooseProfile',
    component: ChooseProfile,
    alias: '/'
  },
  {
    path: '/create-new-profile',
    name: 'AddProfile',
    component: () => import('../views/ProfilesView/AddProfile.vue')
  },
  {
    path: '/manage-profile',
    name: 'SelectProfileToManage',
    component: () => import('../views/ProfilesView/ProfileManagement/SelectProfileToManage.vue')
  },
  {
    path: '/manage-profile/:name',
    name: 'ManageProfile',
    component: () => import('../views/ProfilesView/ProfileManagement/ManageProfile.vue'),
    props: true
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
