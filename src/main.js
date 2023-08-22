import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { registerComponents } from './utils/components.js'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router'
import Toast from 'vue-toastification'

import { Cropper } from 'vue-advanced-cropper'
import 'vue-advanced-cropper/dist/style.css';

import PrimeVue from 'primevue/config'

import DataTable from 'primevue/datatable'
import Dropdown from 'primevue/dropdown'
import Tooltip from 'primevue/tooltip'
import Column from 'primevue/column'
import Avatar from 'primevue/avatar'
import Checkbox from 'primevue/checkbox'

// primevue styles
import 'primevue/resources/themes/lara-light-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

// app styles
import './styles/app.scss'
import 'vue-toastification/dist/index.css'

const app = createApp(App)

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

app.use(pinia)
app.use(Toast)
app.use(router)
app.use(PrimeVue)

app.directive('tooltip', Tooltip)

app.component('DataTable', DataTable)
app.component('Dropdown', Dropdown)
app.component('Column', Column)
app.component('Avatar', Avatar)
app.component('Checkbox', Checkbox)
app.component('Cropper', Cropper)

registerComponents(app)

app.mount('#app')
