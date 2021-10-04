module.exports = async () => {
  return {
    roots: ['<rootDir>'],
    clearMocks: true,
    collectCoverageFrom: [
      '<rootDir>/src/**/*.js',
      '!<rootDir>/src/container.js',
      '!<rootDir>/src/app/Application.js',
    ],
    coverageDirectory: 'coverage',
    coverageThreshold: {
      global: {
        branches: 100,
        functions: 100,
        lines: 100,
        statements: 100
      }
    },
  };
};
