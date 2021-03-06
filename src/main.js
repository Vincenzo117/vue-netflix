import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './index.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCirclePlus, faPencil, faMagnifyingGlass, faBell, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCirclePlus, faPencil, faMagnifyingGlass, faBell, faCaretDown)

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
