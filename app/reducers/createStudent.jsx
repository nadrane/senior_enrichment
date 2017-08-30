import axios from 'axios';

//INITIAL STATE
const initialState = {
  createStudent: ''
};

//ACTION TYPES
const CREATE_STUDENT = 'CREATE_STUDENT';


//ACTION CREATORS
export function createTheStudent (student) {
  return {
    type: CREATE_STUDENT

  };
}

//THUNKS
export function createStudent (student) {
  return function thunk (dispatch){
    return axios.post('/api/students', student)
    .then((createdStudent) => {
      const action = createTheStudent(createStudent);
      dispatch(action);
    })
  }
}

// REDUCER
export default function (prevState = initialState, action) {
  switch (action.type) {
    case CREATE_STUDENT:
       return Object.assign({}, prevState, {createStudent: ''});
    default:
       return prevState;
  }
}
