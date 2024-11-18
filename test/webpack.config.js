const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { WebpackManifestPlugin } = require("webpack-manifest-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "./dist"),
        chunkFilename: "[name].js",
        filename: "[name].js",
        publicPath: "",
    },
    devtool: "source-map",
    resolve: {
        extensions: [".ts", ".js", ".json", ".jsx", ".tsx"],
        alias: {
            react: path.resolve("../node_modules/react"),
        },
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
    optimization: {
        minimize: true,
        runtimeChunk: {
            name: "runtime", // necessary when using multiple entrypoints on the same page
        },
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/](react|react-dom|react-router|react-router-dom|jquery)[\\/]/,
                    name: "vendor",
                    chunks: "all",
                },
            },
        },
    },
    plugins: [
        new WebpackManifestPlugin({
            fileName: "asset-manifest.json",
            generate: (seed, files) => {
                const manifestFiles = files.reduce((manifest, file) => {
                    manifest[file.name] = file.path;
                    return manifest;
                }, seed);

                const entrypointFiles = files.filter(x => x.isInitial && !x.name.endsWith(".map")).map(x => x.path);

                return {
                    files: manifestFiles,
                    entrypoints: entrypointFiles,
                };
            },
        }),
        new HtmlWebpackPlugin({
            hash: true,
            filename: "index.html",
            template: "./src/index.html",
        }),
    ],
};
