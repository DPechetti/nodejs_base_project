module.exports = async () => {
  return {
    roots: ['<rootDir>'],
    clearMocks: true,
    collectCoverageFrom: [
      '<rootDir>/src/**/*.js',
      '<rootDir>/config/**/*.js',
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
