import { createRouter, createWebHashHistory } from 'vue-router'
import MainPage from '../views/MainPage.vue'
import GenrePage from '../views/GenrePage.vue'
import SearchResultPage from '../views/SearchResultPage.vue'
import MovieCardPage from '../views/MovieCardPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: MainPage
  },
  {
    path: '/genre/:id',
    name: 'genre',
    component: GenrePage
  },
  {
    path: '/search-result',
    name: 'search-result',
    component: SearchResultPage
  },
  {
    path: '/moviecard/:id',
    name: 'moviecard',
    component: MovieCardPage
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
