import React, { Component } from 'react';
import axios from 'axios';
import store, { editStudent } from '../store';
import { HashRouter, Link } from 'react-router-dom';

export default class EditStudent extends Component {

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

    const editedStudent = {
      id: this.state.singleStudent.selectedStudent.id,
      name: event.target.name.value,
      email: event.target.email.value,
      campusId: event.target.campusId.value
    }
    console.log("EDITTED STUDENT", editedStudent)
    store.dispatch(editStudent(editedStudent));
    this.props.history.push('/students')
  }

  render() {
    const student = this.state.singleStudent.selectedStudent;
    const studentObj = Object.assign({}, student);
    const campus = this.state.campuses.campuses.find( (campus) => student.campusId === campus.id);
    const campusObj = Object.assign({}, campus);
    const campuses = this.state.campuses.campuses;
    return (
      <HashRouter>
        <div>
          <div className="header">
            <h1 className="header-heading">Edit Student Details</h1>
          </div>
          <hr />
          <h3>Current Student Name:   {studentObj.name} </h3>
          <h3>Current Student Email:   {studentObj.email}</h3>
          <h3>Current Student Campus:   {campusObj.name}</h3>
          <br />
          <br />
          <form onSubmit={this.handleEditStudent}>
            <div className="form-group">
                <label>New Student Name
                <input
                  name="name"
                  type="text"
                  className="form-control"
                  required
                />
              </label>
              <br />
              <br />
              <label> New Email Address
                <input
                  name="email"
                  type="email"
                  className="form-control"
                  required
                />
              </label>
              <br />
              <br />
              <label> Assign New Campus
                <br />
                <br />
                <select name='campusId'>
                  {campuses.map((campus) =>
                    <option key={campus.id} value={campus.id}>{campus.name}</option>
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

