import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignIn2190281Reducer from '../features/SignIn2190281/redux/reducers'
import Dashboard2290280Reducer from '../features/Dashboard2290280/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignIn2190281: SignIn2190281Reducer,
Dashboard2290280: Dashboard2290280Reducer,

});