'use client'

import { useParams, useRouter, usePathname, useSearchParams } from 'next/navigation'
import { FC, useCallback } from 'react'
import { LOCALE_KEY, LOCALES } from '~/constants'
import { AppSupportLanguage } from '~/types'
import { cookieStorage } from '~/utils'

export interface ChangeLanguageProps {
  options: AppSupportLanguage[]
}

export const LocaleSwitcher: FC<ChangeLanguageProps> = ({ options }) => {
  const { locale } = useParams<{ locale: AppSupportLanguage }>()
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const handleChange = useCallback(
    (selected: AppSupportLanguage) => {
      console.log({ selected, locale })

      cookieStorage.setClient(LOCALE_KEY, selected)
      const regexp = new RegExp(`^/(${LOCALES.join('|')})`)
      const newPathname = pathname.replace(regexp, selected)
      const qs = searchParams.toString()
      const url = new URL(window.location.origin)

      url.pathname = newPathname
      url.search = qs

      router.replace(url.toString())
    },
    [pathname, searchParams, router, locale]
  )

  return (
    <div>
      {options.map((l) => (
        <label key={l} style={{ marginRight: '1rem' }}>
          <input type="radio" name="locale" value={l} checked={locale === l} onChange={() => handleChange(l)} />
          {l}
        </label>
      ))}
    </div>
  )
}
