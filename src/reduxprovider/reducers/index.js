import { combineReducers } from "redux";
import ReducerHomeScreen from "./ReducerHomeScreen";
import ReducerLoadingScreen from "./ReducerLoadingScreen";
import ReducerDiscoverScreen from "./ReducerDiscoverScreen";

// combine all reducers
const rootReducer = combineReducers({
  homeScreen: ReducerHomeScreen,
  loader: ReducerLoadingScreen,
  discoverScreen: ReducerDiscoverScreen,
});

export default rootReducer;
