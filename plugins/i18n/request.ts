import { hasLocale } from 'next-intl'
import { getRequestConfig } from 'next-intl/server'
import { LOCALES } from '~/constants'
import { defaultLocale } from '~/plugins/i18n'

export default getRequestConfig(async ({ locale, requestLocale }) => {
  let requested = locale ?? (await requestLocale)
  requested = hasLocale(LOCALES, requested) ? requested : defaultLocale

  return {
    locale: requested,
    messages: (await import(`~/plugins/i18n/${requested}.json`)).default,
  }
})
