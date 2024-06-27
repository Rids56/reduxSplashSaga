export default {
    roots: ['<rootDir>/src'],
    testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'],
    transform: {
      '^.+\\.jsx?$': 'babel-jest',
    },
    // moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
    // verbose: true,
  };