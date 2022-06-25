import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PlantCalender from '../views/PlantCalender.vue'
import PlantLexicon from '../views/PlantLexicon.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/plantCalender',
    name: 'PlantCalender',
    component: PlantCalender
  },
  {
    path: '/plantLexicon',
    name: 'PlantLexikon',
    component: PlantLexicon
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  LinkActiveClass: 'active',
  routes
})

export default router
