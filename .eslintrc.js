module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  rules: {
    'no-console': 'off',
    'vue/return-in-computed-property': 'off',
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  ignorePatterns: ['**/*spec.js']
}
