// const HtmlWebpackPlugin = require("html-webpack-plugin");
// const path = require("path");

// module.exports = {
//   entry: path.resolve(__dirname, "./src/index.js"),
//   context: path.resolve(__dirname, "src"),
//   output: {
//     filename: "bundle.js",
//     path: path.resolve(__dirname, "build"),
//   },
//   mode: "development",
//   devServer: {
//     static: {
//       publicPath: "/public",
//       directory: path.join(__dirname, "./public"),
//     },
//     port: 8080,
//     proxy: {
//       "/api": { target: "http://localhost:3000" },
//     },
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: "./public/index.html",
//     }),
//   ],
//   module: {
//     rules: [
//       {
//         test: /\.(sass|css|scss)$/i,
//         // include: path.resolve(__dirname, "./client"),
//         use: ["style-loader", "css-loader", "sass-loader"],
//       },
//       {
//         test: /\.(jsx|js)$/,
//         include: path.resolve(__dirname, "./src"),
//         exclude: /node_modules/,
//         use: {
//           loader: "babel-loader",
//           options: {
//             presets: ["@babel/preset-env", "@babel/preset-react"],
//           },
//         },
//       },
//       {
//         test: /\.(png|svg|jpg|gif|ico)$/,
//         exclude: /node_modules/,
//         use: ["file-loader"],
//       },
//     ],
//   },
// };
