import { createRouter, createWebHistory } from 'vue-router'
import ConviteView from '../views/ConviteView.vue'
import ManualView from '../views/ManualView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'convite',
      component: ConviteView,
    },
    {
      path: '/manual',
      name: 'manual',
      component: ManualView,
    }
  ],
})

export default router
