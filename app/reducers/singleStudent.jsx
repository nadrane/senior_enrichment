import axios from 'axios';

//INITIAL STATE
const initialState = {
  selectedStudent: {},
};

//ACTION TYPES
const SELECTED_SINGLE_STUDENT = 'SELECTED_SINGLE_STUDENT';

//ACTION CREATORS
export function selectedSingleStudent (student) {
  return {
    type: SELECTED_SINGLE_STUDENT,
    student
  };
}

//THUNKS
export function fetchStudent(studentId) {
  return function thunk (dispatch){
    return axios.get(`/api/students/${studentId}`)
    .then(res => res.data)
    .then(student => {
      const action = selectedSingleStudent(student);
      dispatch(action);
    });
  }
}

// REDUCER
export default function singleStudentReducer (prevState = initialState, action) {
  switch (action.type) {
    case SELECTED_SINGLE_STUDENT:
       return Object.assign({}, prevState, { selectedStudent: action.student['0']});
    default:
       return prevState;
  }
}

