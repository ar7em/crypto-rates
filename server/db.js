const monk = require("monk");

const url = "mongodb://mongo:27017";
const db = monk(url);
db.then(() => {
  console.log("Connected to Mongo");
});

module.exports = db;
