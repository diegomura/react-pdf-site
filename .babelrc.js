const env = require('./env-config.js')

module.exports = {
  presets: ['next/babel'],
  plugins: [
    ["prismjs", {
        "languages": ["jsx", "bash"]
    }],
    ['transform-define', env]
  ]
}
