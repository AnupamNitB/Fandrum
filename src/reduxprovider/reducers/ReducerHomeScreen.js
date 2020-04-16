import * as ActionTypes from '../actions/index';

const initialState = {
  HomeData: [],
};

export default (state = initialState, action) => {
  const {type, payload, HomeData} = action;
  switch (type) {
    case ActionTypes.HOME_DATA:
      return {HomeData: HomeData};
    default:
      return state;
  }
};
