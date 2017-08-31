import React, { Component } from 'react';
import axios from 'axios';
import store, { editStudent } from '../store';
import { HashRouter, Link } from 'react-router-dom';

export default class AddStudentToCampus extends Component {

  constructor() {
    super();
    this.state = store.getState();
    this.handleEditStudent = this.handleEditStudent.bind(this)
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() =>
      this.setState(store.getState())
    );
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  handleEditStudent(event) {
    event.preventDefault();
    const camp = this.state.campuses.selectedCampus;
    const campusOb = Object.assign({}, camp);
    const editedStudent = {
      id: event.target.studentId.value,
      campusId: campusOb.id
    }
    console.log("EDITTED STUDENT", editedStudent)
    store.dispatch(editStudent(editedStudent));
    this.props.history.push('/campuses')
  }

  render() {
    const campus = this.state.campuses.selectedCampus;
    const campusObj = Object.assign({}, campus);
    console.log("CAMPUS OBJ", campusObj)
    const students = this.state.students.students;
    return (
      <HashRouter>
        <div>
          <div className="header">
            <h1 className="header-heading">Add Student To Campus</h1>
          </div>
          <hr />
          <h3>Current Campus:   {campusObj.name} </h3>
          <br />
          <br />
          <form onSubmit={this.handleEditStudent} >
            <div className="form-group">
              <label> Student to Add to Campus
                <br />
                <br />
                <select name='studentId'>
                  {students.map((student) =>
                    <option key={student.id} value={student.id}>{student.name}</option>
                  )}
                </select>
              </label>
              <br />
              <br />
            </div>
            <button type="submit" className="btn btn-default">Submit</button>
          </form>
          <hr />
        </div>
      </HashRouter>
    );
  }
}
