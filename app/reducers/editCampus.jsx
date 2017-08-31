import axios from 'axios';

//INITIAL STATE
const initialState = {
  editCampus: '',
};

//ACTION TYPES
const EDIT_CAMPUS = 'EDIT_CAMPUS';


//ACTION CREATORS
export function editTheCampus () {
  return {
    type: EDIT_CAMPUS
  };
}

//THUNKS
export function editCampus (campus) {
  return function thunk (dispatch){
    return axios.put(`/api/campuses`, campus)
    .then(() => {
      const action = editTheCampus();
      dispatch(action);
    })
  }
}

// REDUCER
export default function (prevState = initialState, action) {
  switch (action.type) {
    case EDIT_CAMPUS:
       return Object.assign({}, prevState, {editCampus: ''});
    default:
       return prevState;
  }
}
