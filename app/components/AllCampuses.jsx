import React, { Component } from 'react';
import axios from 'axios';
import { HashRouter, Link } from 'react-router-dom';
import store, { fetchCampuses, fetchStudents } from '../store'


export default class AllCampuses extends Component {

  constructor(props) {
    super(props);
    this.state = store.getState();
  }

  componentDidMount() {
    const campusesThunk = fetchCampuses();
    const studentsThunk = fetchStudents()
    store.dispatch(campusesThunk);
    store.dispatch(studentsThunk);
    this.unsubscribe = store.subscribe(() =>
      this.setState(store.getState())
    )
    this.forceUpdate()
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const campuses = this.state.campuses.campuses;
    return (
      <HashRouter>
        <div>
          <div className="header">
            <h1 className="header-heading">Campuses</h1>
          </div>
          <hr />
          <ol className="list-group">
            {campuses.map(campus => {
              return (
                <li key={campus.id}>
                  <Link value={campus.id} to={`/campuses/${campus.id}`}>{campus.name}</Link>
                </li>
              );
            })
            }
          </ol>
          <p><Link to={'/createcampus'} className="btn">Create New Campus</Link></p>
          <hr />
        </div>
      </HashRouter>
    );
  }
}


