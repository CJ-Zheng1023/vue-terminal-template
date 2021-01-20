import Vue from 'vue'
import App from './App.vue'
import Contextmenu from '@cj_zheng1023/vue2-contextmenu'
import '@cj_zheng1023/vue2-contextmenu/dist/styles/styles.css'
Vue.use(Contextmenu)
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
