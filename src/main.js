import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import router from './router'
import globalVar from './config/Global.vue'
import store from './store'
import { VueSimpleAlert } from "vue-simple-alert";

createApp(App).use(store).use(router).use(globalVar).mount('#app')
