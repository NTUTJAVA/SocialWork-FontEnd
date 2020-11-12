import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import router from './router'
import store from './store'

createApp(App).use(store).use(router).mount('#app')
