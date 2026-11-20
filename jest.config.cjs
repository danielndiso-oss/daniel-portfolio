module.exports = {
  testEnvironment: 'jsdom',
  testMatch: ['**/__tests__/**/*.test.{js,jsx}'],
  setupFilesAfterEnv: ['<rootDir>/src/__tests__/setup.js'],
  moduleNameMapper: {
    '\\.css$': '<rootDir>/src/__tests__/styleMock.js',
  },
  transform: {
    '^.+\\.[jt]sx?$': 'babel-jest',
  },
}
