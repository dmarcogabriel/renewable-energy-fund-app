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
          '@hooks': './src/hooks',
          '@models': './src/models',
          '@contexts': './src/contexts',
          '@assets': './src/assets',
          '@navigation': './src/navigation',
          '@constants': './src/constants',
        },
      },
    ],
  ],
};
