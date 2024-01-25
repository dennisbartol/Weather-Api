import Vue from 'vue'
import App from './App.vue'


Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/forecast', component: Forecast }
]

const router = new VueRouter({
  routes
})


Vue.config.productionTip = false 

new Vue ({
  render: h => h(App),
}).$mount('#app')
