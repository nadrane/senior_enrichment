import axios from 'axios';

//INITIAL STATE
const initialState = {
  selectedStudent: {id: 1},
};

//ACTION TYPES
const SELECTED_SINGLE_STUDENT = 'SELECTED_SINGLE_STUDENT';
const EDIT_STUDENT = 'EDIT_STUDENT';
const EDIT_STUDENT_CAMPUS = 'EDIT_STUDENT_CAMPUS';
const DELETE_STUDENT = 'DELETE_STUDENT';
const CREATE_STUDENT = 'CREATE_STUDENT';

//ACTION CREATORS
export function fetchTheStudent (student) {
  return {
    type: SELECTED_SINGLE_STUDENT,
    student
  };
}

export function editTheStudent () {
  return {
    type: EDIT_STUDENT
  };
}

export function editTheStudentCampus () {
  return {
    type: EDIT_STUDENT_CAMPUS
  };
}

export function deleteTheStudent () {
  return {
    type: DELETE_STUDENT
  };
}

export function createTheStudent (student) {
  return {
    type: CREATE_STUDENT

  };
}


//THUNKS
export function fetchStudent(studentId) {
  return function thunk (dispatch){
    return axios.get(`/api/students/${studentId}`)
    .then(res => res.data)
    .then(student => {
      const action = fetchTheStudent(student);
      dispatch(action);
    });
  }
}

export function editStudent (student) {
  return function thunk (dispatch){
    return axios.put(`/api/students`, student)
    .then(() => {
      const action = editTheStudent();
      dispatch(action);
    })
  }
}

export function editStudentCampus (student) {
  return function thunk (dispatch){
    return axios.put(`/api/students/${student.id}`, student)
    .then(() => {
      const action = editTheStudentCampus();
      dispatch(action);
    })
  }
}

export function deleteStudent (studentId) {
  return function thunk (dispatch){
    return axios.delete(`/api/students/${studentId}`)
    .then(() => {
      const action = deleteTheStudent();
      dispatch(action);
    })
  }
}

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
  console.log("action.student",action.student)
  switch (action.type) {
    case SELECTED_SINGLE_STUDENT:
       return Object.assign({}, prevState, {selectedStudent: action.student[0]});
    case EDIT_STUDENT:
       return Object.assign({}, prevState);
    case EDIT_STUDENT_CAMPUS:
       return Object.assign({}, prevState);
    case DELETE_STUDENT:
       return Object.assign({}, prevState);
    case CREATE_STUDENT:
       return Object.assign({}, prevState, {createStudent: ''});
    default:
       return prevState;
  }
}

