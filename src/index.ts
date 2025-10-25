module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'airbnb-typescript/base',
    'plugin:@typescript-eslint/eslint-recommended',
    'next/core-web-vitals',
    'prettier',
  ],
  plugins: ['prettier', '@typescript-eslint', 'unused-imports'],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      tsx: true,
    },
  },
  rules: {
    // Prettier and Hooks warnings
    'react-hooks/exhaustive-deps': 'warn',

    // Disable annoying React rules if not needed
    'react/button-has-type': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/alt-text': 0,

    // Unused variables/imports cleanup
    '@typescript-eslint/no-unused-vars': [
      'warn',
      { argsIgnorePattern: '^_' },
    ],
    'unused-imports/no-unused-imports': 'warn',

    // TypeScript member style
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'comma',
          requireLast: true,
        },
        singleline: {
          delimiter: 'comma',
          requireLast: true,
        },
        overrides: {
          interface: {
            multiline: {
              delimiter: 'semi',
              requireLast: true,
            },
          },
        },
      },
    ],

    // Other relaxed rules
    'import/no-extraneous-dependencies': 0,
    'no-underscore-dangle': 0,
  },
};
