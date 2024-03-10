import PrimeVue from 'primevue/config'
import Menubar from 'primevue/menubar'
import Carousel from 'primevue/carousel'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import 'primevue/resources/themes/mdc-light-indigo/theme.css'
import 'primeicons/primeicons.css'
import 'primevue/resources/primevue.min.css'
import './assets/user.css';

const app = createApp(App)
app.use(PrimeVue)
app.use(createPinia())
app.use(router)
// eslint-disable-next-line vue/multi-word-component-names
app.component('Menubar', Menubar)
// eslint-disable-next-line vue/multi-word-component-names
app.component('Carousel', Carousel)

app.mount('#app')
