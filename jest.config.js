module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node', // Specify the test environment
    // rootDir: '', // Set the root directory to 'NODE API'
    testMatch: ['<rootDir>/src/tests/**/*.ts'], // Match all .ts files in src/tests and subdirectories
    forceExit: true,
};