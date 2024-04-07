import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './config/router'
import Vant from 'vant'
import 'vant/lib/index.css'
import store from './store'
import 'tcplayer.js/dist/tcplayer.min.css';
import 'animate.css';
import * as ElementPlusIconsVue from '@element-plus/icons-vue'


const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.use(store)
app.use(Vant)
app.use(ElementPlus)
app.use(router)
app.mount('#app')