import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  {
    path: '/users/List',
    name: 'usersList',
    component: () => import('../views/users/List.vue')
  },
  {
    path: '/users/Form',
    name: 'usersForm',
    component: () => import('../views/users/Form.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
