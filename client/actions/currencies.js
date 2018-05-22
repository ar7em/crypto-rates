export const CURRENCIES_REQUEST_NEW = "CURRENCIES_REQUEST_NEW";
export const CURRENCIES_RECEIVED_NEW = "CURRENCIES_RECEIVED_NEW";
export const CURRENCIES_DECLINED_NEW = "CURRENCIES_DECLINED_NEW";
export const CURRENCIES_RECEIVED_ALL = "CURRENCIES_RECEIVED_ALL";
export const CURRENCIES_REMOVE = "CURRENCIES_REMOVE";

const api = "/currencies/";
const request = ({url, params, success, fail} = { params: {}, success: () => {}, fail: () => {} }) => (
  fetch(url, Object.assign({}, {
    headers: new Headers({
      "Content-Type": "application/json"
    })
  }, params))
    .then((response) => {
      if (!response.ok) {
        throw response;
      }

      return response.json();
    })
    .then(success)
    .catch((err) => {
      err.json().then(fail);
    })
);

export const declineNew = (error) => ({
  type: CURRENCIES_DECLINED_NEW,
  payload: {
    error
  }
});

export const requestNew = (code) => (dispatch, getState) => {
  const list = getState().currencies.all;
  const alreadyExists = list.find(currency => currency.code === code);

  if (alreadyExists) {
    return dispatch(declineNew(`${code} is already added`));
  }

  dispatch({
    type: CURRENCIES_REQUEST_NEW
  });

  request({
    url: api,
    params: {
      body: JSON.stringify({code}),
      method: "POST"
    },
    success: ({price}) => (
      dispatch({
        type: CURRENCIES_RECEIVED_NEW,
        payload: {
          code,
          price
        }
      })
    ),
    fail: ({error}) => dispatch(declineNew(error))
  });
};

export const requestAll = () => (dispatch) => {
  request({
    url: api,
    success: (list) => (
      dispatch({
        type: CURRENCIES_RECEIVED_ALL,
        payload: list
      })
    )
  });
};

export const remove = (code) => {
  request({
    url: `${api}/${code}`,
    params: {
      method: "DELETE"
    }
  });

  return {
    type: CURRENCIES_REMOVE,
    payload: {
      code
    }
  };
};
