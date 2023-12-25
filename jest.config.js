module.exports = {
  preset: 'react-native',
  transform: {'^.+\\.[t|j]sx?$': 'babel-jest'},
  setupFiles: ['./node_modules/react-native-gesture-handler/jestSetup.js'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  reporters: ['default'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?@?react-native|@react-native-community|@react-navigation|@ant-design|toggle-switch-react-native)',
  ],
};
