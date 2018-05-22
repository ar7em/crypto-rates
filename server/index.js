const express = require("express");
const webpack = require("webpack");
const webpackMiddleware = require("webpack-dev-middleware");
const webpackConfig = require("../webpack.config.js");
const controllers = require("./controllers");
const databaseReady = require("./db");

const app = express();

const startServer = () => {
  app.listen("3000", () => {
    console.log("Started Express server");
  });
};

function useWebpackMiddleware() {
  const developmentCompiler = webpack(webpackConfig);
  const middleware = webpackMiddleware(developmentCompiler, webpackConfig.devServer);
  app.use(middleware);
}

function registerEndpoints() {
  app.use(controllers);
  app.use(express.static("build"));
}

databaseReady
  .then(useWebpackMiddleware)
  .then(registerEndpoints)
  .then(startServer);
