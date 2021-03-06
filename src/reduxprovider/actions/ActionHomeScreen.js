import * as ActionTypes from "./index";
import { API_BASE_URL, THIRD_PARTY } from "../../constant/constant";

const MovieData = (data) => {
  return {
    type: ActionTypes.MOVIE_HOME_DATA,
    data,
  };
};

const IsLoading = (bool) => {
  return {
    type: ActionTypes.IS_LOADING,
    isLoading: bool,
  };
};

const MovieAPI = () => {
  return (dispatch) => {
    dispatch(IsLoading(true));

    fetch(
      `${THIRD_PARTY}&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=true&page=1`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((res) => {
        // console.log("Home Screen", res);
        dispatch(MovieData(res.results));
        dispatch(IsLoading(false));
        // if (res.status === "ok") {
        //   // console.log("resdataa", res);
        //   dispatch(MovieData(res.results));
        //   // dispatch(IsLoading(false));
        // } else {
        //   dispatch(MovieData([]));
        //   // dispatch(MovieData([]));
        //   // dispatch(IsLoading(false));
        //   // alert(res.message);
        // }
      })
      .catch((e) => {
        // dispatch(IsLoading(false));
      });
  };
};

export default {
  MovieAPI,
  MovieData,
  IsLoading,
};
