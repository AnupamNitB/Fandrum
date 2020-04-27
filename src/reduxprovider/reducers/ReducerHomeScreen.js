import * as ActionTypes from "../actions/index";

const initialState = {
  MovieData: [],
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  // console.log("MovieData", MovieData);
  // console.log("typessss", type);
  // console.log("actions", action);

  switch (type) {
    case ActionTypes.MOVIE_HOME_DATA:
      return action.data;

    default:
      return state;
  }
};
