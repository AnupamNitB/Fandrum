import * as ActionTypes from "../actions/index";

const initialState = {
  Discover: [],
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ActionTypes.DISCOVER_DATA:
      return action.data;

    default:
      return state;
  }
};
