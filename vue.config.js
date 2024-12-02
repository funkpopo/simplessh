const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true,
      externals: ['@electron/remote'],
      builderOptions: {
        extraResources: [
          {
            from: 'public/splash.html',
            to: 'splash.html'
          },
          {
            from: 'src/assets/icon.png',
            to: 'icon.png'
          }
        ],
        asar: true,
        asarUnpack: [
          "resources/**/*"
        ]
      }
    }
  },
  configureWebpack: {
    resolve: {
      fallback: {
        "path": require.resolve("path-browserify"),
        "fs": false
      }
    }
  },
  lintOnSave: false
})