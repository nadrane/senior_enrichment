import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import SingleStudent from './SingleStudent';
import { HashRouter, Route } from 'react-router-dom';

export default class AllStudents extends Component {

  constructor(props) {
    super(props);
    this.state = {
      students: [],
    };
  }

  componentDidMount () {
    axios.get('/api/students/')
      .then(res => {return res.data})
      .then(students => {
        this.setState({ students })
      });
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
            this.state.students.map(student => {
              return (
                <li key={student.id}>
                  <Link to={`/students/${student.id}`}>{student.name}</Link>
                </li>
              )
            })
          }
          </ol>
          <hr />
      </div>
     </HashRouter>
    )
  }
}

