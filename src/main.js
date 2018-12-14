import Vue from 'vue'
import App from './App.vue'
import router from './router'

import store from './state/store'

import 'normalize.css'
import VueBar from 'vuebar'

import 'vue-tel-input/dist/vue-tel-input.css';
import VueTelInput from 'vue-tel-input'

Vue.use(VueBar)
Vue.use(VueTelInput)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
