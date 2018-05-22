const monk = require("monk");

let db;

function connect() {
  const url = "mongodb://mongo:27017";
  db = monk(url);
  return db.then(() => {
    console.log("Connected to Mongo");
  });
}

module.exports = {
  db: () => db,
  connect
};
