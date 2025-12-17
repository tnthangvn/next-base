import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

import AutoImport from 'unplugin-auto-import/vite'
// auto import not working
export const autoImportPlugin = AutoImport({
  imports: [
    {
      'next-intl': ['useTranslations'], // auto import hook
    },
  ],
  dirs: ['./utils', './constants'],
  dts: './types/auto-imports.d.ts',
})

const nextConfig: NextConfig = {}

const withNextIntl = createNextIntlPlugin({
  requestConfig: './plugins/i18n/request.ts',
})
export default withNextIntl(nextConfig)
