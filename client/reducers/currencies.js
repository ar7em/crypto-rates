import * as actions from "actions/currencies";

const initialState = {
  fetchingNew: false,
  fetchingAll: false,
  error: "",
  all: []
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case actions.CURRENCIES_REQUEST_NEW:
      return Object.assign({}, state, {
        fetchingNew: true,
        error: ""
      });
    case actions.CURRENCIES_RECEIVED_NEW:
      return Object.assign({}, state, {
        fetchingNew: false,
        all: [payload].concat(state.all)
      });
    case actions.CURRENCIES_DECLINED_NEW:
      return Object.assign({}, state, {
        fetchingNew: false,
        error: payload.error
      });
    default:
      return state;
  }
};
