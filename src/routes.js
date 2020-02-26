import Home from './components/Home.vue'
import About from './components/About.vue'
import Skills from './components/Skills.vue'
import WorkExperience from './components/WorkExperience.vue'
import Portfolio from './components/Portfolio.vue'
import Contact from './components/Contact.vue'

export const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/skills', component: Skills },
  { path: '/work-experience', component: WorkExperience },
  { path: '/portfolio', component: Portfolio },
  { path: '/contact', component: Contact }
];