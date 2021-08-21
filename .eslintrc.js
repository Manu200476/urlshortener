module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
    'prettier/prettier',
  ],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    semi: ['error', 'never'],
    'max-len': ['error', { code: 120, ignoreUrls: true }],
  },
  "parser": "babel-eslint"
}
