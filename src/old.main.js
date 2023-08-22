import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { registerComponents } from './utils/components.js'

import { API } from './api/api'
import { createApolloProvider } from '@vue/apollo-option'
import Toast from 'vue-toastification'
// Import the CSS or use your own!
import VueExcelEditor from 'vue3-excel-editor'
import { Vue3ProgressPlugin } from '@marcoschulte/vue3-progress'
import PrimeVue from 'primevue/config'

import DataTable from 'primevue/datatable'
import Dropdown from 'primevue/dropdown'
import Tooltip from 'primevue/tooltip'
import InputText from 'primevue/inputtext'
import Column from 'primevue/column'
import Avatar from 'primevue/avatar'

import Vue3SimpleHtml2pdf from 'vue3-simple-html2pdf'
import VueEasyLightbox from 'vue-easy-lightbox'

import 'primevue/resources/themes/saga-blue/theme.css' //theme
import 'primevue/resources/primevue.min.css' //core css
import 'primeicons/primeicons.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import '@/styles/tailwind.css'
import 'vue-toastification/dist/index.css'
import './styles/app.css' // Here

import firebaseMessaging from './utils/firebase.js'

const app = createApp(App)

app.config.globalProperties.$messaging = firebaseMessaging

const apolloProvider = createApolloProvider({
  defaultClient: API
})
app.config.productionTip = false

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

app.use(Toast)
app.use(pinia)
app.use(apolloProvider)
app.use(router)
app.use(VueExcelEditor)
app.use(Vue3ProgressPlugin)
app.use(PrimeVue)
app.use(VueEasyLightbox)
app.use(Vue3SimpleHtml2pdf)

app.directive('tooltip', Tooltip)

app.component('DataTable', DataTable)
app.component('Dropdown', Dropdown)
app.component('InputText', InputText)
app.component('Column', Column)
app.component('Avatar', Avatar)

registerComponents(app)

app.mount('#app')

function initAccordion(elem, option) {
  document.addEventListener('click', function (e) {
    // Daca elementul nu este .acc-title, nu fa nimic
    if (!e.target.matches(elem + ' .acc-title')) return
    else {
      // Daca parintele (.acc-container) lui .acc-title are clasa .acc-active
      if (!e.target.parentElement.classList.contains('acc-active')) {
        // Daca option==true, sterge clasa .acc-active pentru celelalte elemente
        if (option == true) {
          var elementList = document.querySelectorAll(elem + ' .acc-container')
          Array.prototype.forEach.call(elementList, function (e) {
            e.classList.remove('acc-active')
          })
        }
        // Daca nu are clasa .acc-active, adauga clasa .acc-active
        e.target.parentElement.classList.add('acc-active')
      } else {
        // Daca are clasa .acc-active, remove clasa .acc-active
        e.target.parentElement.classList.remove('acc-active')
      }
    }
  })
}

// Deschide doar unul, inchide celelalte
initAccordion('.accordion.acc-single-open', true)
// Deschide multiple, fara a inchide celelalte
initAccordion('.accordion.acc-multiple-open', false)
