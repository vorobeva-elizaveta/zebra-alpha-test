import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

const app = createApp(App)

app.use(createPinia())

const basePath = import.meta.env.VITE_APP_BASE_PATH
app.config.globalProperties.$basePath = basePath

app.mount('#app')
