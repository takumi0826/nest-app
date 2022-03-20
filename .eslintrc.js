module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['google', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'import'],
  rules: {
    semi: ['off', 'always'],
    'import/order': [2, { alphabetize: { order: 'asc' } }],
    'new-cap': ['off'],
    'require-jsdoc': ['off'],
    'no-unused-vars': ['off'],
  },
}
