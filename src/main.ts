import { createApp } from 'vue'
import { createHead } from '@vueuse/head'

import router from '@/routes'
import { store } from '@/store'
import App from '@/App.vue'

const head = createHead()

createApp(App).use(head).use(router).use(store).mount('#app')
