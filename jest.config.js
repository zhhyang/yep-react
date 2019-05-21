module.exports = {
  setupFiles: ['./tests/setup.js'],
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}'],
  testEnvironment: 'jsdom',
  testURL: 'http://localhost',
  transform: {
    '^.+\\.[j|t]sx?$': 'babel-jest',
    '^.+\\.css$': './tests/jest/cssTransform.js',
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': './tests/jest/fileTransform.js',
  },
  moduleNameMapper: {
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
  },
  moduleFileExtensions: ['js', 'ts', 'tsx', 'json', 'jsx', 'node'],
};
