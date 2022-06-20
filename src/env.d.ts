/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

// eslint-disable-next-line
interface ImportMetaEnv {
  VITE_BASE_URL: string
}
