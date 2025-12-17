import vi from '~/plugins/i18n/vi.json'
import en from '~/plugins/i18n/en.json'
import { LOCALES } from '~/constants/i18n'
import { getPublicConfig } from '~/utils'

const { locale } = getPublicConfig()

export const locales = LOCALES
export const defaultLocale = locale
export const messages = { vi, en }
