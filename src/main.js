import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import Store from "./Store.js"

Vue.use(Vuex)
const store = new Vuex.Store(Store)

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')