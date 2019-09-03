// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  bail: true,
  clearMocks: true,
  testEnvironment: 'node',
  transform: {
    '.js': '@sucrase/jest-plugin'
  },
  testMatch: ['**/__tests__/**/*.test.ts?(x)']
};
