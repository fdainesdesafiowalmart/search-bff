module.exports = {
  testEnvironment: 'node',
  coveragePathIgnorePatterns: [
    '/node_modules/'
  ],
  moduleFileExtensions: [
    'js'
  ],
  moduleDirectories: [
    'node_modules',
    '.',
    '<rootDir>/src/'
  ],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.js',
    '!**/build/**/*.js',
    '!**/coverage/**/*.js',
    '!**/dist/**/*.js',
    '!**/node_modules/**/*.js'
  ],
  coverageReporters: [
    'json',
    'lcov',
    'text',
    'clover',
    'html',
    'cobertura'
  ],
  roots: [
    './'
  ],
  restoreMocks: true,
  clearMocks: true,
  resetMocks: true
}
