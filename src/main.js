import PrimeVue from 'primevue/config'
import Menubar from 'primevue/menubar'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router/user/route.js'

import 'primevue/resources/themes/mdc-light-indigo/theme.css'
import 'primeicons/primeicons.css'
import 'primevue/resources/primevue.css'
import '@mdi/font/css/materialdesignicons.min.css'
// import './assets/user.css';

const app = createApp(App)
app.use(PrimeVue)
app.use(createPinia())
app.use(router)
// eslint-disable-next-line vue/multi-word-component-names
app.component('Menubar', Menubar)


app.mount('#app')
