import axios from 'axios';

//INITIAL STATE
const initialState = {
  createCampus: '',
};

//ACTION TYPES
const CREATE_CAMPUS = 'CREATE_CAMPUS';


//ACTION CREATORS
export function createTheCampus (campus) {
  return {
    type: CREATE_CAMPUS

  };
}

//THUNKS
export function createCampus (campus) {
  return function thunk (dispatch){
    return axios.post('/api/campuses', campus)
    .then((createdCampus) => {
      const action = createTheCampus(createCampus);
      dispatch(action);
    })
  }
}

// REDUCER
export default function (prevState = initialState, action) {
  switch (action.type) {
    case CREATE_CAMPUS:
       return Object.assign({}, prevState, {createCampus: ''});
    default:
       return prevState;
  }
}
