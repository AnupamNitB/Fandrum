import * as ActionTypes from "../actions/index";

const initialState = {
  MovieData: [],
};

export default (state = initialState, action) => {
  const { type, payload, MovieData } = action;
  console.log("MovieData", MovieData, type);
  console.log("typessss", type);

  switch (type) {
    case ActionTypes.MOVIE_HOME_DATA:
      return { MovieData: MovieData };
    default:
      return state;
  }
};
