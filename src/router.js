import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import About from './pages/About.vue'
import UserDetail from './pages/UserDetail.vue'
import NotFound from './pages/NotFound.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/home', component: About }, // Sesuai permintaanmu
  { path: '/user/:id', component: UserDetail },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
  },
]

const router = createRouter({
  history: createWebHistory(), // Menghilangkan tanda # di URL
  routes,
})

export default router
