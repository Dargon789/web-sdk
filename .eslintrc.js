module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },

  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'prettier'
  ],

  rules: {
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-non-null-assertion': 'warn',
    '@typescript-eslint/explicit-module-boundary-types': 'warn',
    '@typescript-eslint/ban-types': 'warn',
    '@typescript-eslint/ban-ts-comment': 'warn',
    '@typescript-eslint/no-empty-function': 'warn',
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/no-var-requires': 'warn',
    '@typescript-eslint/no-this-alias': 'warn',

    'import/no-unresolved': 'off',
    'import/no-default-export': 1,
    'import/no-named-as-default-member': 'off',
    'import/export': 'off'

    // 'import/order': [
    //   'warn',
    //   {
    //     'groups': ['builtin', 'external', 'parent', 'sibling', 'index'],
    //     'alphabetize': {
    //       'order': 'asc', /* sort in ascending order. Options: ['ignore', 'asc', 'desc'] */
    //       'caseInsensitive': true /* ignore case. Options: [true, false] */
    //     }
    //   },
    // ]
  }
}
