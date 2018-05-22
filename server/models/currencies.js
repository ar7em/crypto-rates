const request = require("request-promise");
const schedule = require("node-schedule");
const db = require("../db");

const api = "https://min-api.cryptocompare.com/data/price";
const fiat = "EUR";
const getCollection = () => db.get("currencies");

const scheduleUpdate = (code) => {
  schedule.scheduleJob("*/5 * * * *", () => {
    fetch(code);
  });
};

const getAll = async () => {
  const documents = await getCollection().find();
  documents.sort((a, b) => {
    return b.added - a.added;
  });
  return documents;
};

const fetch = async (code) => {
  const response = await request({
    uri: api,
    qs: {
      fsym: code,
      tsyms: fiat
    }
  });

  const data = JSON.parse(response);

  if (data.Response === "Error") {
    throw new Error(`Can't fetch price for ${code}`);
  }

  const price = data[fiat];

  getCollection().findOneAndUpdate({
    code
  }, {
    $set: {
      code,
      price
    },
    $setOnInsert: {
      added: Date.now()
    }
  }, {
    upsert: true
  }).then((updatedDoc) => {
    console.log("Upserted: ", updatedDoc);
  });

  return price;
};

const remove = async (code) => {
  return await getCollection().remove({code});
};

db.then(async () => {
  const currencies = await getAll();
  currencies.forEach((currency) => scheduleUpdate(currency.code));
});

module.exports = {
  fetch,
  getAll,
  remove,
  scheduleUpdate
};
