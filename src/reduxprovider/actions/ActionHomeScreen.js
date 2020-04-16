import * as ActionTypes from './index';
import {API_BASE_URL} from '../..constant/constant';
const SignUP = data => {
  return {
    type: ActionTypes.SIGNUP,
    HomeData: data,
  };
};

const IsLoading = bool => {
  return {
    type: ActionTypes.HOME_IS_LOADING,
    isLoading: bool,
  };
};

const SignUpAPI = searchQue => {
  return dispatch => {
    dispatch(IsLoading(true));
    fetch(API_BASE_URL + '/avfkgndflk', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(res => {
        console.log('Register Res', res);
        if (res.status === 'ok') {
          dispatch(HomeData(res.articles));
          dispatch(IsLoading(false));
        } else {
          dispatch(HomeData([]));
          dispatch(IsLoading(false));
          alert(res.message);
        }
      })
      .catch(e => {
        dispatch(IsLoading(false));
      });
  };
};

export default {
  SignUpAPI,
  HomeData,
  IsLoading,
};
