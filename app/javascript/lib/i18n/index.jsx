import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import resources from './locales'

/**
 * i18n configuration
 */

i18n.use(initReactI18next).init({
  initImmediate: false,
  fallbackLng: 'en-US',
  lng: 'en-US',
  resources,
  whitelist: ['en-US'],
  keySeparator: '.',
  interpolation: { escapeValue: false },
})

export default i18n
