import { createApp } from 'vue'
import { createHead } from '@vueuse/head'

import { globalCookiesConfig } from 'vue3-cookies'
import { store } from '@/store'
import router from '@/routes'
import i18n from '@/locales'
import App from './App.vue'
import './main.css'

const head = createHead()

globalCookiesConfig({
  expireTimes: '30d',
  path: '/',
  domain: '',
  secure: true,
  sameSite: 'None',
})

createApp(App).use(head).use(i18n).use(router).use(store).mount('#app')
