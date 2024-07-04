import './assets/main.css'

import { createApp } from 'vue'
import UsersView from './components/UsersView.vue'
import TeamsView from './components/TeamsView.vue'
import TeamView from './components/TeamView.vue'
import NotFoundView from './components/NotFoundView.vue'
import HomeView from './components/HomeView.vue'
import UserView from './components/UserView.vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

const router = createRouter({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/users',
      name: 'Users',
      component: UsersView
    },
    {
      path: '/posts',
      name: 'Posts',
      component: TeamsView
    },
    {
      path: '/post/:id',
      name: 'Post',
      component: TeamView
    },
    {
      path: '/user/:id',
      name: 'User',
      component: UserView
    },
    {
      path: '/:pathMatch(.*)*',
      name: '404',
      component: NotFoundView
    }
  ],
  history: createWebHistory()
})

createApp(App).use(router).mount('#app')
