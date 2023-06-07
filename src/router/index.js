import { createRouter, createWebHistory } from 'vue-router'

import AboutView from '../views/AboutView.vue'
import EventDetailsView from '../views/EventDetailsView.vue'
import EventListView from '../views/EventListView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'event-list',
      component: EventListView
    },
    {
      path: '/event/:eventId',
      name: 'event-details',
      component: EventDetailsView,
      props: true // Less coupling
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    }
  ]
})

export default router
