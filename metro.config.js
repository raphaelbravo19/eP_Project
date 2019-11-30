const fs = require('fs');
const path = require('path');
const getDevPaths = require('get-dev-paths');

const projectRoot = __dirname;
module.exports = {
  resolver: {
    extraNodeModules: {
      react: path.resolve(__dirname, 'node_modules/react'),
      'react-native': path.resolve(__dirname, 'node_modules/react-native'),
    },
  },
  // Old way
  /*  getProjectRoots: () =>
    Array.from(new Set(getDevPaths(projectRoot).map($ => fs.realpathSync($)))), */
  // New way
  watchFolders: Array.from(
    new Set(getDevPaths(projectRoot).map($ => fs.realpathSync($)))
  ),

  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
};
