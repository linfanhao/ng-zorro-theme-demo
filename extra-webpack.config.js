module.exports = {
  module: {
    rules: [{
      test: /\.less$/,
      loader: 'less-loader',
      options: {
        modifyVars: {
          'primary-color': '#1fc0af',
          'link-color': '#1fc0af',
          'border-radius-base': '2px'
        },
        javascriptEnabled: true
      }
    }]
  }
}
