import axios from 'axios';

//INITIAL STATE
const initialState = {
  deleteStudent: ''
};

//ACTION TYPES
const DELETE_STUDENT = 'DELETE_STUDENT';


//ACTION CREATORS
export function deleteTheStudent () {
  return {
    type: DELETE_STUDENT
  };
}

//THUNKS
export function deleteStudent (studentId) {
  return function thunk (dispatch){
    return axios.delete(`/api/students/${studentId}`)
    .then(() => {
      const action = deleteTheStudent();
      dispatch(action);
    })
  }
}

// REDUCER
export default function (prevState = initialState, action) {
  switch (action.type) {
    case DELETE_STUDENT:
       return Object.assign({}, prevState, {deleteStudent: ''});
    default:
       return prevState;
  }
}
