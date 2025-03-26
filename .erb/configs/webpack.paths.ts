const path = require('path');

const rootPath = path.join(__dirname, '../..');

const dllPath = path.join(rootPath, 'dll');

const srcPath = path.join(rootPath, 'src');
const srcMainPath = path.join(srcPath, 'main');
const srcRendererPath = path.join(srcPath, 'renderer');

const distPath = path.join(rootPath, 'dist');
const distMainPath = path.join(distPath, 'main');
const distRendererPath = path.join(distPath, 'renderer');

const buildPath = path.join(rootPath, 'build');

const rootNodeModulesPath = path.join(rootPath, 'node_modules');
const rootPackagePath = path.join(rootPath, 'package.json');

export default {
  rootPath,
  dllPath,
  srcPath,
  srcMainPath,
  srcRendererPath,
  distPath,
  distMainPath,
  distRendererPath,
  buildPath,
  rootNodeModulesPath,
  rootPackagePath,
};
