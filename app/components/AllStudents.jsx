import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import SingleStudent from './SingleStudent';
import { HashRouter, Route } from 'react-router-dom';
import store from '../store'

export default class AllStudents extends Component {

  constructor(props) {
    super(props);
    this.state = store.getState()
  }


  componentDidMount () {
    this.unsubscribe = store.subscribe(() =>
      this.setState(store.getState())
  );}

  componentWillUnmount () {
    this.unsubscribe();
  }


render(){

  return(
    <HashRouter>
      <div>
        <div className='header'>
          <h1 className='header-heading'>Students</h1>
        </div>
          <hr />
          <ol className="list-group">
          {
            this.state.students.students.map(student => {
              return (
                <li key={student.id}>
                  <Link to={`/students/${student.id}`}>{student.name}</Link>
                </li>
              )
            })
          }
          </ol>
          <p><Link to={'/createstudent'} className="btn">Create New Student</Link></p>
          <hr />
      </div>
     </HashRouter>
    )
  }
}

