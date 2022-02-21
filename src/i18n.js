import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { English } from './translate/en'
import { Turkish } from './translate/tr'
import { Russian } from './translate/ru'

i18n.use(initReactI18next).init({
  resources: {
    en: English,
    tr: Turkish,
    ru: Russian
  },
  fallbackLng: 'tr',
  ns: ['translations'],
  defaultNS: 'translations',
  keySeparator: '.',
  interpolation: {
    escapeValue: false
  },
  react: {
    wait: true
  }
})

export default i18n
