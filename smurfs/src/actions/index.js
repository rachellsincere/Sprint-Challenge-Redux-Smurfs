import axios from 'axios';
/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
export const FETCHING = "FETCHING";
export const SUCCESS = "SUCCESS";
export const FAILURE = "FAILURE";
export const ADD_SMURF = "ADD_SMURF";
export const ADD_SUCCESS = "ADD_SUCCESS";
/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

const url = 'http://localhost:3333/smurfs';

export const getSmurfs = () => dispatch => {
  dispatch({ type: FETCHING });
  axios
      .get(url)
      .then(response => 
        dispatch({ type: SUCCESS, payload: response.data}))
          
      .catch(error => dispatch({ type: FAILURE, payload: error}));
};

export const addSmurf = smurf => dispatch => {
  dispatch({ type: ADD_SMURF });
  axios
    .post(url, smurf)
    .then(response => {
      dispatch({ type: ADD_SUCCESS, payload: response.data });
    })
    .catch(error => {
      dispatch({type: FAILURE, payload: error});
    })

  }