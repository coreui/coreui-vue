import eslint from '@eslint/js'
import eslintPluginUnicorn from 'eslint-plugin-unicorn'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import eslintPluginUnusedImports from 'eslint-plugin-unused-imports'
import eslintPluginVue from 'eslint-plugin-vue'
import vueParser from 'vue-eslint-parser'
import globals from 'globals'
import typescriptEslint from 'typescript-eslint'

export default typescriptEslint.config(
  { ignores: ['**/*.d.ts', '**/coverage', '**/dist', '**/.astro', 'packages/docs/**/*.mjs'] },
  {
    extends: [
      eslint.configs.recommended,
      ...typescriptEslint.configs.recommended,
      ...eslintPluginVue.configs['flat/recommended'],
      eslintPluginUnicorn.configs['flat/recommended'],
    ],
    files: ['packages/**/src/**/*.{js,ts,tsx}'],
    ignores: ['packages/docs/**'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.browser,
      parserOptions: {
        parser: typescriptEslint.parser,
      },
    },
    rules: {
      'no-console': 'off',
      'no-debugger': 'off',
      'unicorn/filename-case': 'off',
      'unicorn/no-array-for-each': 'off',
      'unicorn/no-null': 'off',
      'unicorn/no-useless-undefined': 'off',
      'unicorn/prefer-at': 'off',
      'unicorn/prefer-dom-node-append': 'off',
      'unicorn/prefer-export-from': 'off',
      'unicorn/prefer-global-this': 'off',
      'unicorn/prefer-query-selector': 'off',
      'unicorn/prefer-spread': 'off',
      'unicorn/prevent-abbreviations': 'off',
      'vue/require-default-prop': 'off',
    },
  },
  {
    files: ['**/*.mjs'],
    ignores: ['packages/docs/**'],
    languageOptions: {
      globals: {
        ...Object.fromEntries(Object.entries(globals.browser).map(([key]) => [key, 'off'])),
        ...globals.node,
      },

      ecmaVersion: 'latest',
      sourceType: 'module',
    },
  },
  {
    files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
  },
  {
    files: ['packages/docs/build/**'],
    languageOptions: {
      globals: {
        ...Object.fromEntries(Object.entries(globals.browser).map(([key]) => [key, 'off'])),
        ...globals.node,
      },

      ecmaVersion: 5,
      sourceType: 'commonjs',
    },
    rules: {
      'no-console': 'off',
      strict: 'error',
    },
  },
  {
    files: ['packages/docs/src/content/**/examples/**/*.vue'],
    extends: [...eslintPluginVue.configs['flat/recommended']],
    plugins: {
      'unused-imports': eslintPluginUnusedImports,
    },
    languageOptions: {
      parser: vueParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.browser,
      parserOptions: {
        parser: typescriptEslint.parser,
      },
    },
    rules: {
      '@typescript-eslint/no-unused-vars': 'off',
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'error',
        { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' },
      ],
    },
  },
  eslintPluginPrettierRecommended
)
