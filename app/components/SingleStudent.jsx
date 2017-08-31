
import React, { Component } from 'react';
import axios from 'axios';
import store, { fetchStudent, deleteStudent} from '../store';
import { Link, HashRouter } from 'react-router-dom';


export default class SingleStudent extends Component {

  constructor() {
    super();
    this.state = store.getState();
    this.handleDeleteStudent = this.handleDeleteStudent.bind(this)
  }

  componentDidMount() {
    const studentId = this.props.match.params.studentId;
    store.dispatch(fetchStudent(studentId));
    this.unsubscribe = store.subscribe(() =>
      this.setState(store.getState())
    );
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  handleDeleteStudent(e) {
    e.preventDefault();
    this.props.history.push('/students')
    const studentId = this.state.singleStudent.selectedStudent.id;
    store.dispatch(deleteStudent(studentId));
    this.props.history.push('/students')
  }

  render() {
    const student = this.state.singleStudent.selectedStudent;
    const campus = this.state.campuses.campuses.find( (campus) => student.campusId === campus.id);
    const campusObj = Object.assign({}, campus);
    // const campusName = campus.name;
    return (
      <HashRouter>
        <div>
          <div className="header">
            <h1 className="header-heading">Student Details</h1>
          </div>
          <hr />
          <h3>Student Name:   {student.name} </h3>
          <h3>Student Email:   {student.email}</h3>
          <h3>Student's Campus:  <Link value={campusObj.id} to={`/campuses/${campusObj.id}`}>{campusObj.name}</Link></h3>
          <br />
          <p><Link to={'/editstudent'} className="btn">Edit Student</Link></p>
          <p><a href="#" value ={student.id} className="btn" onClick={this.handleDeleteStudent}>Delete Student</a></p>

          <hr />
        </div>
      </HashRouter>
    );
  }
}

