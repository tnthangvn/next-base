import { AppSupportLanguage } from '~/types'

export const getPublicConfig = () => {
  const { NEXT_PUBLIC_API_URL = '', NODE_ENV = 'local', NEXT_PUBLIC_LOCALE = 'en' } = process.env
  return {
    apiUrl: NEXT_PUBLIC_API_URL,
    mode: NODE_ENV,
    locale: NEXT_PUBLIC_LOCALE as AppSupportLanguage,
  }
}
