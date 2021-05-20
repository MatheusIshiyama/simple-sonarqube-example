module.exports = {
  moduleFileExtensions: ['js'],
  coverageDirectory: 'tests/coverage',
  testEnvironment: 'node',
  testResultsProcessor: 'jest-sonar-reporter',
  testMatch: ['<rootDir>/tests/**/*.test.js'],
};
