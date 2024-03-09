import PrimeVUe from 'primevue/config'
import Menubar from 'primevue/menubar'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import 'primevue/resources/themes/mdc-light-indigo/theme.css'
import 'primeicons/primeicons.css'
import 'primevue/resources/primevue.min.css'

const app = createApp(App)
app.use(PrimeVUe)
app.use(createPinia())
app.use(router)
app.component('Menubar', Menubar)

app.mount('#app')
