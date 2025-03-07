const { merge } = require("webpack-merge");
const common = require("./webpack.config.js");
const path = require("path");

module.exports = merge(common, {
    mode: "production",
    output: {
        ...common.output,
        path: path.resolve(__dirname, "./proddist"),
        chunkFilename: "[name].[contenthash:8].js",
        filename: "[name].[contenthash:8].js",
    },
});
