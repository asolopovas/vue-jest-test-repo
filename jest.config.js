module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',

    // verbose: true,
    roots: ['<rootDir>/specs/', '<rootDir>/resources/'],
    moduleFileExtensions: ['ts', 'vue', 'js', 'json'],
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/resources/$1',
    },
    transform: {
        '^.+\\.js$': 'babel-jest',
        '^.+\\.vue$': 'vue-jest',
        '^.+\\.tsx?$': 'ts-jest',
    },
    snapshotSerializers: [
        'jest-serializer-vue',
    ],
    transformIgnorePatterns: ["/node_modules/(?!(bootstrap-vue)/)"],
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
    testURL: 'http://localhost/',
};
