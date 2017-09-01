import axios from 'axios';

// //INITIAL STATE
// const initialState = {
//   students: []
// }

//ACTION TYPES

const GET_STUDENTS = 'GET_STUDENTS';


//ACTION CREATORS
export function getStudents (students) {
  console.log("get students RAN!")
  return {
    type: GET_STUDENTS,
    students
  };
}

//THUNKS

export function fetchStudents() {
  return function thunk (dispatch){
    return axios.get('/api/students/')
    .then(res => res.data)
    .then(students => {
      const action = getStudents(students);
      dispatch(action);
    });
  }
}


// REDUCER
export default function (prevState = [], action) {
  switch (action.type) {
    case GET_STUDENTS:
      return  action.students;
    default:
       return prevState;
  }
}



