const express = require("express");
const monk = require("monk");
const webpack = require("webpack");
const webpackMiddleware = require("webpack-dev-middleware");
const webpackConfig = require("../webpack.config.js");
const controllers = require("./controllers");

const app = express();
let db;

function connectToDb() {
  const url = "mongodb://mongo:27017";
  db = monk(url);
  return db.then(() => {
    console.log("Connected to Mongo");
  });
}

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

connectToDb()
  .then(useWebpackMiddleware)
  .then(registerEndpoints)
  .then(startServer);
