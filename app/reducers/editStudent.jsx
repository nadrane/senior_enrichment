import axios from 'axios';

//INITIAL STATE
const initialState = {
  editStudent: '',
};

//ACTION TYPES
const EDIT_STUDENT = 'EDIT_STUDENT';


//ACTION CREATORS
export function editTheStudent () {
  return {
    type: EDIT_STUDENT
  };
}

//THUNKS
export function editStudent (student) {
  return function thunk (dispatch){
    return axios.put(`/api/students`, student)
    .then(() => {
      const action = editTheStudent();
      dispatch(action);
    })
  }
}


// REDUCER
export default function (prevState = initialState, action) {
  switch (action.type) {
    case EDIT_STUDENT:
       return Object.assign({}, prevState, {editStudent: ''});
    default:
       return prevState;
  }
}
