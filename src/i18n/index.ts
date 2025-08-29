import { createI18n } from 'vue-i18n'
import en from '@/locales/en.json'
import vi from '@/locales/vi.json'
import jp from '@/locales/jp.json'

const saved = localStorage.getItem('locale')
const locale = saved || navigator.language.split('-')[0] || 'en'
const supported = ['en', 'vi', 'jp']
const normalized = supported.includes(locale) ? locale : 'en'

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: normalized,
  fallbackLocale: 'en',
  messages: { en, vi, jp },
})

export default i18n
