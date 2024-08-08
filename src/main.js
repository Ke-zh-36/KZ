import Vue from 'vue'
import App from './App.vue'
// import e1 from './views/ExampleViews.vue'
// import e2 from './views/ExampleViews1.vue'
// import Login from './views/Login.vue'
import router from './router/index'
import store from './store'
import element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'  
Vue.component('el-icon-user',element)
Vue.config.productionTip = false
Vue.use(element)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
 