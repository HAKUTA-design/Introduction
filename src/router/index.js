import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('views/home/Home')
const Introduction = () => import('views/introduction/Introduction')
const Skills = () => import('views/skills/Skills')
const Hobbies = () => import('views/hobbies/Hobbies')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/introduction',
    component: Introduction
  },
  {
    path: '/skills',
    component: Skills
  },
  {
    path: '/hobbies',
    component: Hobbies
  }
]

const router = new VueRouter ({
  routes,
  mode: 'history'
})

export default router