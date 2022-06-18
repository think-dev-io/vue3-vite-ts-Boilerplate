import { customNavigator } from '@/store/data/navigator'
import { createI18n } from 'vue-i18n'

import enLocale from './en'
import esLocale from './es'
import frLocale from './fr'
import ruLocale from './ru'

const messages = {
  en: enLocale,
  es: esLocale,
  fr: frLocale,
  ru: ruLocale,
}

export function getLanguage() {
  const chooseLanguage = localStorage.getItem('tdev--current_language')
  if (chooseLanguage) return chooseLanguage

  // if has not choose language
  const _navigator: customNavigator = window.navigator
  const language =
    _navigator.userLanguage?.toLowerCase().substring(0, 2) ??
    _navigator.language.toLowerCase().substring(0, 2)
  const lang = Object.keys(messages).find((l) => l === language)

  return lang ?? 'en'
}

const i18n = createI18n({
  fallbackLocale: 'en', // Not needed cuz `getLanguage` already return a fallback
  locale: getLanguage(),
  messages,
})

export default i18n
