/*
  Be sure to import in all of the action types from `../actions`
*/
import {
  FETCHING,
  SUCCESS,
  FAILURE,
  ADD_SMURF
} from "../actions";

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this*/
 const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurf: false,
   error: null
 }


/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCHING:
      return {
        ...state,
        fetchingSmurfs: true
    
      }
    case SUCCESS:
      return {
        ...state,
        fetchingSmurfs: false,
        smurfs: action.payload

      }
    case FAILURE:
      return {
        ...state,
        fetchingSmurfs: false,
        error: action.payload

      }
    case ADD_SMURF:
      return {
        ...state, 
        fetchingSmurfs: false,
        smurfs: action.payload
      }
  
    default:
      return state;
  }
};



