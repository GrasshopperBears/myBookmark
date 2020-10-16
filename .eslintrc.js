module.exports = {
  env: {
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:vue/essential', 'google', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['vue', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
  },
};
