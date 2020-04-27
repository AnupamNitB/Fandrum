import * as ActionTypes from "./index";
import { API_BASE_URL, THIRD_PARTY } from "../../constant/constant";

const discoverData = (data) => {
  return {
    type: ActionTypes.DISCOVER_DATA,
    data,
  };
};

const DiscoverAPI = () => {
  return async (dispatch) => {
    try {
      let response = await fetch(
        `${THIRD_PARTY}&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=true&page=1`,

        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      let responseJSON = await response.json();
      console.log("response data", responseJSON);
      dispatch(discoverData(responseJSON.results));
    } catch (error) {
      console.error(error);
    }
  };
};
export default {
  DiscoverAPI,
  discoverData,
};
