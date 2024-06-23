import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ProjectsView from '../views/ProjectsView.vue'

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: HomeView
  },
  {
    path: '/home',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView
  },
  {
    path: '/jobs',
    name: 'Projects',
    component: ProjectsView
  }
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to) => {
  document.title = to.name;
});

export default router
