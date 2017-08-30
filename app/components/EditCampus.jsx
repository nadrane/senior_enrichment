import React, { Component } from 'react';
import axios from 'axios';
import store, {editCampus} from '../store';
import { HashRouter, Link } from 'react-router-dom';

export default class EditCampus extends Component {

  constructor() {
    super();
    this.state = store.getState();
    this.handleEditCampus = this.handleEditCampus.bind(this)
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() =>
      this.setState(store.getState())
    );
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  handleEditCampus(event) {
    const editedCampus = {
      id: this.state.campuses.selectedCampus.id,
      location: event.target.location.value
    }
    store.dispatch(editCampus(editedCampus));
    event.preventDefault();
  }

  render() {
    const campus = this.state.campuses.selectedCampus;
    return (
      <HashRouter>
        <div>
          <div className="header">
            <h1 className="header-heading">Edit Campus Details</h1>
          </div>
          <hr />
          <h3>Campus Name:   {campus.name} </h3>
          <h3>Current Campus Location:   {campus.location}</h3>
          <h3>Enter New Location:   </h3>
            <form onSubmit={this.handleEditCampus}>
            <div className="form-group">
              <label></label>
              <input
                name="location"
                type="text"
                className="form-control"
                required
              />
            </div>
              <button type="submit" className="btn btn-default">Submit</button>
            </form>
          <hr />
        </div>
      </HashRouter>
    );
  }
}


