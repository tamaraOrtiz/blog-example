const OFF = 0
const WARNING = 1
const ERROR = 2

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:react/recommended',
    'prettier'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks'],
  rules: {
    'import/order': [
      WARNING,
      {
        groups: ['builtin', 'external', ['parent', 'sibling'], 'index', 'unknown'],
        pathGroups: [
          {
            pattern: '@(react|react-redux)',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '~/**',
            group: 'external',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: ['@(react|react-redux)'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'import/no-duplicates': WARNING,
    'import/no-unresolved': OFF, // Temporarily disabled
    'no-unused-vars': WARNING,
    'no-use-before-define': OFF,
    'arrow-parens': [ERROR, 'as-needed'],
    'react/default-props-match-prop-types': ERROR,
    'react/jsx-filename-extension': OFF,
    'import/extensions': OFF,
    'react/jsx-props-no-spreading': OFF,
    'react/require-default-props': WARNING,
    'react-hooks/rules-of-hooks': ERROR,
    'react-hooks/exhaustive-deps': WARNING,
    'react/react-in-jsx-scope': OFF,
    'react/display-name': OFF,
    'react/forbid-prop-types': OFF, // Temporarily disabled
    'no-alert': OFF, // Temporarily disabled
    'no-console': WARNING,
    'jsx-a11y/anchor-is-valid': OFF,
  },
};
