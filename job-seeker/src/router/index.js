import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CandidatosView from '../views/CandidatosView.vue'
import EmpleosView from '../views/EmpleosView.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/candidatos',
    name: 'candidatos',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: CandidatosView
  },
  {
    path: '/empleos',
    name: 'empleos',
    component: EmpleosView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
