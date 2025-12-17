import 'next-intl'

declare module 'next-intl' {
  export const useTranslations: typeof import('next-intl').useTranslations
}
