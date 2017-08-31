import { combineReducers } from 'redux'
import campuses from './campuses';
import students from './students';
import singleStudent from './singleStudent';
import deleteCampus from './deleteCampus';
import editCampus from './editCampus';
import createCampus from './editCampus';
import deleteStudent from './deleteStudent';
import createStudent from './createStudent';
import editStudent from './editStudent';

export default combineReducers({
  campuses,
  students,
  singleStudent,
  deleteCampus,
  editCampus,
  createCampus,
  deleteStudent,
  createStudent,
  editStudent
  });

