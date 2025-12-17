import { useTranslations } from 'next-intl'
import { LocaleSwitcher } from '~/components/base/locale-switcher'
import Demo from '~/components/demo'
import { LoginContainer } from '~/components/login'
import { LOCALES } from '~/constants'

export default function HomeLocale() {
  const t = useTranslations()
  return (
    <div className="bg-primary font-sans text-3xl">
      {t('common.save')}
      <Demo />
      <div className="h-20 w-full">
        <LocaleSwitcher options={LOCALES} />
      </div>
      <LoginContainer className="size-full" />
    </div>
  )
}
