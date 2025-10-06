module.exports = {
  plugins: ['baseline'],
  rules: {
    'baseline/no-unstable-apis': 'error'
  },
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module'
  }
};
