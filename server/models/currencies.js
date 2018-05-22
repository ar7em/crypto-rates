const request = require("request-promise");

const api = "https://min-api.cryptocompare.com/data/price";
const fiat = "EUR";

const fetch = async function(code) {
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

  return data[fiat];
};

module.exports = {
  fetch
};
