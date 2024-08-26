import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  moduleDirectories: ['node_modules', 'src'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '^@/components/(.*)$': '<rootDir>/components/$1', // Map the components alias
    '^next/image$': '<rootDir>/__mocks__/next/image.tsx', // Mock Next.js Image component
  },
  testMatch: [
    '**/?(*.)+(spec|test).[tj]s?(x)',
  ],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(ts|tsx|js|jsx)?$': 'babel-jest',
  },
  transformIgnorePatterns: [
    '/node_modules/',
  ],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};

export default config;
