import { createRouter, createWebHashHistory } from 'vue-router'
import Title from '../components/Title.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/:userId',
      name: 'Title',
      component: Title,
      props: true
    },
  ],
})

export default router
