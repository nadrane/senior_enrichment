import React, { Component } from 'react';
import axios from 'axios';
import store, {selectedSingleCampus, fetchCampus} from '../store';

export default class SingleCampus extends Component {

  constructor() {
    super();
    this.state = store.getState();
  }

  componentDidMount () {
    const campusId = this.props.match.params.campusId;
    store.dispatch(fetchCampus(campusId));
    this.unsubscribe = store.subscribe(() =>
      this.setState(store.getState())
  );}

  componentWillUnmount () {
    this.unsubscribe();
  }

render(){
  const campus = this.state.selectedCampus
  return (
      <div>
         <h3>Campus Name:   {campus.name} </h3>
         <h3>Campus Location:   {campus.location}</h3>
         <h4>Enrolled Students:</h4>
      </div>
    );
  }
}



