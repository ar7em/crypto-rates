const request = require("request-promise");
const schedule = require("node-schedule");
const db = require("../db");

const api = "https://min-api.cryptocompare.com/data/price";
const fiat = "EUR";
const getCollection = (name) => db.get(name);

const scheduleUpdate = (code) => {
  schedule.scheduleJob("*/5 * * * *", () => {
    fetch(code);
  });
};

const getAll = async () => {
  const documents = await getCollection("currencies").find({}, { sort: { added:-1 } } );
  const history = await getCollection("history").find({}, { limit: 100, sort: { timestamp:-1 } } );
  return documents.map((currency) => {
    currency.history = history.filter(({code}) => code === currency.code);
    return currency;
  });
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

  getCollection("currencies").findOneAndUpdate({
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

  getCollection("history").insert({
    code,
    price,
    timestamp: Date.now()
  });

  return price;
};

const remove = async (code) => {
  getCollection("history").remove({code});
  return await getCollection("currencies").remove({code});
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
