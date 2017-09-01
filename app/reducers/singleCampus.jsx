import axios from 'axios';


//ACTION TYPES
const EDIT_CAMPUS = 'EDIT_CAMPUS';
const DELETE_CAMPUS = 'DELETE_CAMPUS';
const CREATE_CAMPUS = 'CREATE_CAMPUS';
const SELECTED_SINGLE_CAMPUS = 'SELECTED_SINGLE_CAMPUS';


//ACTION CREATORS
export function editTheCampus () {
  return {
    type: EDIT_CAMPUS
  };
}

export function deleteTheCampus () {
  return {
    type: DELETE_CAMPUS
  };
}

export function createTheCampus (campus) {
  return {
    type: CREATE_CAMPUS

  };
}

export function selectedSingleCampus (campus) {
  return {
    type: SELECTED_SINGLE_CAMPUS,
    campus
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

export function deleteCampus (campusId) {
  return function thunk (dispatch){
    return axios.delete(`/api/campuses/${campusId}`)
    .then(() => {
      const action = deleteTheCampus();
      dispatch(action);
    })
  }
}

export function createCampus (campus) {
  return function thunk (dispatch){
    return axios.post('/api/campuses', campus)
    .then((createdCampus) => {
      const action = createTheCampus(createCampus);
      dispatch(action);
    })
  }
}

export function fetchCampus(campusId) {
  return function thunk (dispatch){
    return axios.get(`/api/campuses/${campusId}`)
    .then(res => res.data)
    .then(campus => {
      const action = selectedSingleCampus(campus);
      dispatch(action);
    });
  }
}


// REDUCER
export default function (prevState = {selectedCampus: {id: 1, name:''}}, action) {
  console.log("THIS IS THE FETCH CAMPUS ACTION", action.campus)
  switch (action.type) {
    case SELECTED_SINGLE_CAMPUS:
      return Object.assign({}, prevState, {selectedCampus: action.campus[0]});
    case EDIT_CAMPUS:
       return Object.assign({}, prevState);
    case DELETE_CAMPUS:
       return Object.assign({}, prevState, {deleteCampus: ''});
    case CREATE_CAMPUS:
       return Object.assign({}, prevState, {createCampus: ''});
    default:
       return prevState;
  }
}

