import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import pinia from '@/stores'

// Vant 桌面端适配
import '@vant/touch-emulator'
// Vant 补充样式引入
import 'vant/es/toast/style'
import 'vant/es/dialog/style'
import 'vant/es/notify/style'
import 'vant/es/image-preview/style'

const app = createApp(App)
app.use(router)
app.use(pinia)
app.mount('#app')
