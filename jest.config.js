const jestConfig = require('kcd-scripts/jest');

module.exports = Object.assign(jestConfig, {
  rootDir: __dirname,
  roots: [__dirname],
  displayName: 'react-fullpage',
  transformIgnorePatterns: [],
  transform: {
    '\\.(css|less|sass|scss)$': '<rootDir>/__mocks__/styleMock.js',
    '^.+\\.js$': 'babel-jest',
  },
  verbose: true,
});
