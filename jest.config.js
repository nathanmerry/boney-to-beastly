module.exports = {
  // Automatically clear mock calls and instances between every test
  clearMocks: true,
  testRunner: "jest-jasmine2",
  testEnvironment: "node",
  coveragePathIgnorePatterns: [
    "/node_modules/"
  ],
  setupFilesAfterEnv: ['./jest.setup.js'],
};
