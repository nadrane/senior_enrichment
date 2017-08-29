import React, { Component } from 'react';
import AllCampuses from './AllCampuses';
import AllStudents from './AllStudents';
import SingleCampus from './SingleCampus';
import SingleStudent from './SingleStudent';
import axios from 'axios';
import { HashRouter, Route } from 'react-router-dom';
import Navbar from './Navbar';
import store, {fetchCampuses} from '../store';

export default class Main extends Component {

  componentDidMount(){
    const campusesThunk = fetchCampuses()
    store.dispatch(campusesThunk);
  }

  render(){
    return (
    <HashRouter>
      <div  className="container">
      <Navbar />
          <div className='container'>
            <Route exact path='/' component={AllCampuses} />
            <Route path='/campuses' component={AllCampuses} />
            <Route path='/campuses/:campusId' component={SingleCampus} />
            <Route exact path='/students' component={AllStudents} />
            <Route path='/students/:studentId' component={SingleStudent} />
          </div>
      </div>
    </HashRouter>
    )
  }
}

