import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import createLogger from 'redux-logger'; // https://github.com/evgenyrodionov/redux-logger
import thunkMiddleware from 'redux-thunk'; // https://github.com/gaearon/redux-thunk
import axios from 'axios';


//INITIAL STATE
const initialState = {
  campuses: [],
  selectedCampus: {},
};

//ACTION TYPES
const SELECTED_SINGLE_CAMPUS = 'SELECTED_SINGLE_CAMPUS';
const GET_CAMPUSES = 'GET_CAMPUSES'

//ACTION CREATORS
export function selectedSingleCampus (campus) {
  console.log(campus)
  return {
    type: SELECTED_SINGLE_CAMPUS,
    campus
  };
}

export function getCampuses (campuses) {
  return {
    type: GET_CAMPUSES,
    campuses
  };
}

//THUNKS
export function fetchCampus(campusId) {
  return function thunk (dispatch){
    return axios.get(`/api/campuses/${campusId}`)
    .then(res => res.data)
    .then(campus => {
      console.log("campus", campus)
      const action = selectedSingleCampus(campus);
      dispatch(action);
    });
  }
}


  export function fetchCampuses() {
    return function thunk (dispatch){
      return axios.get('/api/campuses/')
      .then(res => res.data)
      .then(campuses => {
        const action = getCampuses(campuses);
        dispatch(action);
      });
    }
  }


// REDUCER
function reducer (prevState = initialState, action) {
  switch (action.type) {
    case SELECTED_SINGLE_CAMPUS:
       return Object.assign({}, prevState, { selectedCampus: action.campus[0]});
    case GET_CAMPUSES:
       return Object.assign({}, prevState, { campuses: action.campuses });
    default:
       return prevState;
  }
}



// STORE
export default createStore(reducer, applyMiddleware(thunkMiddleware, createLogger()));
