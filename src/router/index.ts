import { createRouter, createWebHistory } from 'vue-router'
// @ts-ignore
import Title from '../components/Title.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:userId',
      name: 'Title',
      component: Title
    },
  ],
})

export default router
