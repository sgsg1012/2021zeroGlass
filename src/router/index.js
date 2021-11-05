import Vue from 'vue'
import VueRouter from 'vue-router'
import review from '../components/review.vue'
import home from '../components/home.vue'
import select from '../components/select.vue'
import test from '../components/test.vue'
import history from '../components/history.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/review', component: review },
  { path: '/home', component: home },
  { path: '/select', component: select },
  { path: '/test', component: test },
  { path: '/history', component: history }
]

const router = new VueRouter({
  routes
})

export default router
