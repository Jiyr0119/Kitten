module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        cwd: 'babelrc',
        root: ['./src'],
        alias: {
          '@src': './src',
          'src/config': './src/config',
          'src/constants': './src/constants',
          'src/components': './src/components',
          'src/elements': './src/elements',
          'src/images': './src/images',
          'src/lib': './src/lib',
          'src/navigations': './src/navigations',
          'src/services': './src/services',
          'src/redux': './src/redux',
          'src/utils': './src/utils',
        },
      },
    ],
  ],
};
