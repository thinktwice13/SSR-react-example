const webpack = require("webpack")
const merge = require("webpack-merge")
const path = require("path")
const baseConfig = require("./webpack.base.js")
const config = {
  entry: "./src/client/App.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public")
  }
}
let mergedConfig = merge(baseConfig, config)
if (process.env.NODE_ENV === "production") {
  const prod = {
    plugins: [
      new webpack.DefinePlugin({
        "process.env": {
          NODE_ENV: JSON.stringify("production") // derp :)
        }
      }),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      })
    ]
  }
  mergedConfig = merge(mergedConfig, prod)
}
module.exports = mergedConfig
