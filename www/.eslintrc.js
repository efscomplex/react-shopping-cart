module.exports = {
   env: {
      browser: true,
      es2021: true,
      jest: true,
   },
   extends: ['plugin:react/recommended', 'standard'],
   parser: '@typescript-eslint/parser',
   parserOptions: {
      ecmaFeatures: {
         jsx: true,
      },
      ecmaVersion: 12,
      sourceType: 'module',
   },
   plugins: ['react', '@typescript-eslint'],
   rules: {
      semi: ['warning', 'never'],
      indent: ['warning', 'tab'],
      'comma-dangle': 'off',
      'space-before-function-paren': 'off',
      ' no-trailing-spaces': 'off'
      'no-use-before-define': 'off',
      '@typescript-eslint/no-use-before-define': 'off',
   },
}
