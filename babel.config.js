module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@atoms': './src/components/atoms',
          '@molecules': './src/components/molecules',
          '@organisms': './src/components/organisms',
          '@pages': './src/components/pages',
          '@components': './src/components', // foders inside components
          '@assets': './src/assets',
          '@api': './src/api',
          '@utils': './src/utils',
          '@constants': './src/constants',
          '@services': './src/api/services',
          '@context': './src/context',
          '@hooks/*': ['./src/hooks/*'],
          '@src': './src',
          '@~': '.',
        },
      },
    ],
  ],
};
