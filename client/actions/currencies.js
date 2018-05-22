export const CURRENCIES_REQUEST_NEW = "CURRENCIES_REQUEST_NEW";
export const CURRENCIES_RECEIVED_NEW = "CURRENCIES_RECEIVED_NEW";
export const CURRENCIES_DECLINED_NEW = "CURRENCIES_DECLINED_NEW";
export const CURRENCIES_REQUEST_ALL = "CURRENCIES_REQUEST_ALL";
export const CURRENCIES_RECEIVED_ALL = "CURRENCIES_RECEIVED_ALL";
export const CURRENCIES_REMOVE = "CURRENCIES_REMOVE";

const api = "/currencies/";

export const decline = (error) => ({
  type: CURRENCIES_DECLINED_NEW,
  payload: {
    error
  }
});

export const requestNew = (code) => (dispatch, getState) => {
  const list = getState().currencies.all;
  const alreadyExists = list.find(currency => currency.code === code);

  if (alreadyExists) {
    return dispatch(decline(`${code} is already added`));
  }

  dispatch({
    type: CURRENCIES_REQUEST_NEW
  });

  const request = fetch(api, {
    body: JSON.stringify({code}),
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json"
    })
  });

  request
    .then((response) => {
      if (!response.ok) {
        throw response;
      }

      return response.json();
    })
    .then(({price}) => {
      dispatch({
        type: CURRENCIES_RECEIVED_NEW,
        payload: {
          code,
          price
        }
      });
    })
    .catch((err) => {
      err.json().then(({error}) => dispatch(decline(error)));
    });
};

export const requestAll = () => (dispatch) => {
  dispatch({
    type: CURRENCIES_REQUEST_ALL,
    payload: [
      {
        code: "BTC",
        price: "1337"
      },
      {
        code: "LTC",
        price: "42"
      }
    ]
  });
};

export const remove = (code) => (dispatch) => {
  dispatch({
    type: CURRENCIES_REMOVE,
    payload: {
      code
    }
  });
};
