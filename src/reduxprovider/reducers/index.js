import {combineReducers} from 'redux';
import ReducerHomeScreen from './ReducerHomeScreen';
import ReducerLoadingScreen from './ReducerLoadingScreen';

// combine all reducers
const rootReducer = combineReducers({
  homeScreen: ReducerHomeScreen,
  loader: ReducerLoadingScreen,
});

export default rootReducer;
