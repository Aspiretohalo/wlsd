import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './config/router'
import Vant from 'vant'
import 'vant/lib/index.css'
import store from './store'

const app = createApp(App)

app.use(store)
app.use(Vant)
app.use(ElementPlus)
app.use(router)
app.mount('#app')