module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'prettier'],
  extends: ['plugin:@typescript-eslint/recommended', 'prettier'],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/no-unused-vars': 0,
  },
};
