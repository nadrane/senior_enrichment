import React, { Component } from 'react';
import AllCampuses from './AllCampuses';
import AllStudents from './AllStudents';
import SingleCampus from './SingleCampus';
import SingleStudent from './SingleStudent';
import EditCampus from './EditCampus';
import CreateCampus from './CreateCampus';
import CreateStudent from './CreateStudent';
import axios from 'axios';
import { HashRouter, Route } from 'react-router-dom';
import Navbar from './Navbar';
import store, {fetchCampuses, fetchStudents} from '../store'

export default class Main extends Component {

  componentDidMount(){
    const campusesThunk = fetchCampuses();
    const studentsThunk = fetchStudents()
    store.dispatch(campusesThunk);
    store.dispatch(studentsThunk);
    this.forceUpdate()
  }

  render(){
    return (
    <HashRouter>
      <div  className="container">
      <Navbar />
          <div className='container'>
            <Route exact path='/' component={AllCampuses} />
            <Route exact path='/campuses' component={AllCampuses} />
            <Route path='/campuses/:campusId' component={SingleCampus}/>
            <Route exact path='/students' component={AllStudents} />
            <Route path='/students/:studentId' component={SingleStudent} />
            <Route exact path='/editcampus' component={EditCampus} />
            <Route exact path='/createcampus' component={CreateCampus} />
            <Route exact path='/editstudent' component={SingleStudent} />
            <Route exact path='/createstudent' component={CreateStudent} />
          </div>
      </div>
    </HashRouter>
    )
  }
}

