import { createApp } from 'vue'
import App from './App.vue'
//import router from './router'

// Vuetify Imports
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})

//reateApp(App).use(router).use(vuetify).mount('#app')
createApp(App).use(vuetify).mount('#app')