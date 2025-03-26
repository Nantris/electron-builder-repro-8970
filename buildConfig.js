module.exports = {
  productName: 'ElectronReact',
  appId: 'org.erb.ElectronReact',
  asar: true,
  files: ['app', 'dist'],
  asarUnpack: [
    '**/node_modules/sharp/**', // https://sharp.pixelplumbing.com/install#electron
    '**/node_modules/@img/**', // https://sharp.pixelplumbing.com/install#electron
  ],
  mac: {
    sign: '.erb/scripts/notarize.js',
    notarize: false,
    target: {
      target: 'default',
      arch: ['arm64', 'x64'],
    },
    type: 'distribution',
    hardenedRuntime: true,
    entitlements: 'assets/entitlements.mac.plist',
    entitlementsInherit: 'assets/entitlements.mac.plist',
    gatekeeperAssess: false,
  },
  dmg: {
    contents: [
      {
        x: 130,
        y: 220,
      },
      {
        x: 410,
        y: 220,
        type: 'link',
        path: '/Applications',
      },
    ],
  },
  win: {
    target: ['nsis'],
  },
  linux: {
    target: ['AppImage'],
    category: 'Development',
  },
  directories: {
    // app: '',
    buildResources: 'assets',
    output: 'release/build',
  },
  extraResources: ['./assets/**'],
  publish: {
    provider: 'github',
    owner: 'electron-react-boilerplate',
    repo: 'electron-react-boilerplate',
  },
};
