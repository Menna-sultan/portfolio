import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Technical from './components/Technical.vue'

import Projects from './components/Projects.vue'
import Experience from './components/Experience.vue'

const routes = [
     { path: '/', name: 'Home', component: Home },
     { path: '/about', name: 'About', component: About },
     { path: '/technical', name: 'Technical', component: Technical },
      { path: '/Projects', name: 'Projects', component: Projects },
      { path: '/experience', name: 'Experience', component: Experience },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,          // العنصر اللي الـ hash يشير له
        behavior: 'smooth',   // scroll سلس
      }
    }
    return { top: 0 }         // scroll للصفحة العليا إذا مفيش hash
  }
})


const app = createApp(App)
app.use(router)
app.mount('#app')
