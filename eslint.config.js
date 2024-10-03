import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

export default [
  { ignores: ['dist'] },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module'
      }
    },
    settings: {
      react: { version: '18.3' },
      'import/resolver': {
        alias: {
          map: [
            ['@', './src'],
            ['@components', './src/app/components'],
            ['@pages', './src/app/pages'],
            ['@layout', './src/app/layout'],
            ['@navigator', './src/app/navigator'],
            ['@constant', './src/app/constant'],
            ['@assets', './assets'],
            ['@utils', './utils'],
            ['@hooks', './utils/hooks']
          ],
          extensions: ['.js', '.jsx']
        }
      }
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      'react/jsx-no-target-blank': 'off',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true }
      ],
      // Add the following rule to catch syntax errors
      'no-undef': 'error',
      'no-unused-vars': 'warn',
      'no-extra-semi': 'error',
      'no-unexpected-multiline': 'error',
      // Enforce named imports for all path aliases
      'no-restricted-imports': [
        'error',
        {
          paths: [
            {
              name: '@',
              importNames: ['default'],
              message: 'Use named imports for @'
            },
            {
              name: '@components',
              importNames: ['default'],
              message: 'Use named imports for @components'
            },
            {
              name: '@pages',
              importNames: ['default'],
              message: 'Use named imports for @pages'
            },
            {
              name: '@layout',
              importNames: ['default'],
              message: 'Use named imports for @layout'
            },
            {
              name: '@navigator',
              importNames: ['default'],
              message: 'Use named imports for @navigator'
            },
            {
              name: '@constant',
              importNames: ['default'],
              message: 'Use named imports for @constant'
            },
            {
              name: '@assets',
              importNames: ['default'],
              message: 'Use named imports for @assets'
            },
            {
              name: '@utils',
              importNames: ['default'],
              message: 'Use named imports for @utils'
            },
            {
              name: '@hooks',
              importNames: ['default'],
              message: 'Use named imports for @hooks'
            }
          ]
        }
      ]
    }
  }
];
