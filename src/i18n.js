import i18n from 'i18next'
import HttpApi from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import { langCodes } from './languages'

export default function initI18n () {
  i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .use(HttpApi)
    .use(LanguageDetector)
    .init({
      supportedLngs: langCodes,
      fallbackLng: 'en',
      detection: {
        order: ['cookie', 'htmlTag', 'localStorage', 'path', 'subdomain'],
        caches: ['cookie']

      },
      backend: {
        loadPath: '/assets/locales/{{lng}}/translation.json'
      },
      react: {
        useSuspense: false
      }

    // interpolation: {
    //   escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    // }
    })
}
