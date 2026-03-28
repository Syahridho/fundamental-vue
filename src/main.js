import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import CompositionComponent from './components/CompositionComponent.vue'
import OptionsComponent from './components/OptionsComponent.vue'
import router from './router'

const app = createApp(App)

app.provide('nameApp', 'Aplikasi Saya')

// Component Registration
// navbar footer button yang sering di gunakan
app
  .component('composition-component', CompositionComponent)
  .component('OptionsComponent', OptionsComponent)

app.use(router).mount('#app')
