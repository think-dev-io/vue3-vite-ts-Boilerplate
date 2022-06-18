import { createApp } from 'vue'
import { createHead } from '@vueuse/head'

import { store } from '@/store'
import router from '@/routes'
import i18n from '@/locales'
import App from './App.vue'
import './main.css'

const head = createHead()

createApp(App).use(head).use(i18n).use(router).use(store).mount('#app')
