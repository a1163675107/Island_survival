
module.exports = {
  publicPath: './',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: false,
  devServer: {
    overlay: {
      warnings: true,
      errors: true
    }
  },
configureWebpack: {
    devtool: 'source-map',
    performance: {
      hints: 'error',
      maxAssetSize: 5000000, // 整数类型（以字节为单位）
      maxEntrypointSize: 5000000 // 整数类型（以字节为单位）
    }
  }
}
