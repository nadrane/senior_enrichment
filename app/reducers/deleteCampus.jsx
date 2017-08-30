import axios from 'axios';

//INITIAL STATE
const initialState = {
  deleteCampus: ''
};

//ACTION TYPES
const DELETE_CAMPUS = 'DELETE_CAMPUS';


//ACTION CREATORS
export function deleteTheCampus () {
  console.log("delete campus action creator")
  return {
    type: DELETE_CAMPUS
  };
}

//THUNKS
export function deleteCampus (campusId) {
  return function thunk (dispatch){
    return axios.delete(`/api/campuses/${campusId}`)
    .then(() => {
      const action = deleteTheCampus();
      dispatch(action);
    })
  }
}

// REDUCER
export default function (prevState = initialState, action) {
  switch (action.type) {
    case DELETE_CAMPUS:
       return Object.assign({}, prevState, {deleteCampus: ''});
    default:
       return prevState;
  }
}
