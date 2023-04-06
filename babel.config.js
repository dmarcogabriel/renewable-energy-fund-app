module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ts', '.tsx', '.json'],
        alias: {
          '@components': './src/components',
          '@configs': './src/configs',
          '@store': './src/store',
        },
      },
    ],
  ],
};