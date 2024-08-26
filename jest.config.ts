import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  moduleDirectories: ["node_modules"], // Ensure 'src' is not included unless needed
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  moduleNameMapper: {
    "^@/components/(.*)$": "<rootDir>/components/$1",
    "^@/constants/(.*)$": "<rootDir>/constants/$1",
    "^next/image$": "<rootDir>/__mocks__/next/image.tsx",
  },
  testMatch: ["**/?(*.)+(spec|test).[tj]s?(x)"],
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(ts|tsx|js|jsx)$": "babel-jest", // Adjust to handle ts and tsx
  },
  transformIgnorePatterns: ["/node_modules/"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
};

export default config;
