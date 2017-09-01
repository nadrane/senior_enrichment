import axios from 'axios';



//ACTION TYPES
const GET_CAMPUSES = 'GET_CAMPUSES'

//ACTION CREATORS
export function getCampuses (campuses) {
  return {
    type: GET_CAMPUSES,
    campuses
  };
}

//THUNKS
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
export default function campusesReducer (prevState = [], action) {
  switch (action.type) {
    case GET_CAMPUSES:
       return action.campuses;
    default:
       return prevState;
  }
}
