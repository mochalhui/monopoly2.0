module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'quotes': 'off',
    'semi': 'off',
    'no-trailing-spaces': 'off',
    'eol-last': 'off',
    'space-before-function-paren': 'off',
    'comma-dangle': 'off',
    'indent': 'off',
    'padded-blocks': 'off',
    'key-spacing': 'off',
    'lines-between-class-members': 'off',
    'no-tabs': 'off',
    'brace-style': 'off',
  }
}
