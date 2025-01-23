const nextJest = require('next/jest');

/** @type {import('jest').Config} */
const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
});

// Add any custom config to be passed to Jest
const config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  // Add more setup options before each test is run
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  preset: 'ts-jest',
  transformIgnorePatterns: [
    '/node_modules/(?!uuid|use-shopping-cart)/', // Allow uuid and use-shopping-cart to be transformed
  ],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest', // Use Babel for JS/TS files
  },
  moduleNameMapper: {
    '^use-shopping-cart$': '<rootDir>/__mocks__/use-shopping-cart.js', // Map the mock for `use-shopping-cart`
  },
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.json', // Ensure TypeScript settings are respected
    },
  },
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(config);
