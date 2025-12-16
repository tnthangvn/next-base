import { defineConfig, globalIgnores } from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'
import nextTs from 'eslint-config-next/typescript'
import prettierConfig from 'eslint-config-prettier'
import prettier from 'eslint-plugin-prettier'
import unicorn from 'eslint-plugin-unicorn'
import sonarjs from 'eslint-plugin-sonarjs'

const eslintConfig = defineConfig([
  prettierConfig,
  ...nextVitals,
  ...nextTs,
  globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts']),
  {
    files: ['**/*.{js,ts,tsx,mjs,cjs}'],
    plugins: { unicorn, sonarjs, prettier },
    rules: {
      ...sonarjs.configs.recommended.rules,
      'prettier/prettier': [
        2,
        {
          arrowParens: 'always',
          bracketSameLine: false,
          bracketSpacing: true,
          semi: false,
          singleQuote: true,
          trailingComma: 'es5',
          printWidth: 150,
          endOfLine: 'lf',
          htmlWhitespaceSensitivity: 'ignore',
          singleAttributePerLine: false,
          plugins: ['prettier-plugin-tailwindcss'],
          tailwindConfig: './tailwind.config.mjs',
          tailwindFunctions: ['tw', 'cva'],
          tailwindPreserveDuplicates: false,
        },
      ],

      // Base JS rules
      // 'linebreak-style': [2, 'unix'],
      'no-console': [process.env.NODE_ENV === 'production' ? 1 : 0],
      'no-debugger': [process.env.NODE_ENV === 'production' ? 1 : 0],
      'max-len': [2, { code: 150, ignoreComments: true }],
      'max-lines': ['warn', { max: 300, skipBlankLines: true, skipComments: true }],
      // 'no-multiple-empty-lines': [2, { max: 1, maxBOF: 0, maxEOF: 0 }],
      // 'padded-blocks': [2, 'never'],
      quotes: [2, 'single', { avoidEscape: true }],
      // 'object-curly-spacing': [2, 'always'],
      // 'array-bracket-spacing': [2, 'never'],

      // Unicorn filename case
      'unicorn/filename-case': [
        2,
        {
          case: 'kebabCase',
          ignore: ['^[a-z][a-z0-9-]*\\.(middleware|global|modules|plugin|config)\\.(ts)$', '^(use|define)[A-Z].*\\.ts$'],
        },
      ],

      // SonarJS
      'sonarjs/cognitive-complexity': [1, 20],
      'sonarjs/no-duplicate-string': [1, { threshold: 3 }],
      'sonarjs/no-small-switch': [2],
      'sonarjs/no-identical-functions': [0],
      'sonarjs/no-duplicate-store': [0],
      'sonarjs/no-inverted-boolean-check': [0],
      'sonarjs/no-nested-switch': [1],
      'sonarjs/no-redundant-boolean': [0],
      'sonarjs/no-collapsible-if': [0],

      // Disable some rules that conflict in Next.js
      'import/no-duplicates': [0],
    },
  },
])

export default eslintConfig
