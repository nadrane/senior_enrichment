import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import SingleCampus from './SingleCampus';
import { HashRouter, Route } from 'react-router-dom';
import store, {fetchCampuses, fetchCampus, getCampuses} from '../store';


export default class AllCampuses extends Component {

constructor(props) {
  super(props);
  this.state = store.getState();

}

componentDidMount () {
  this.unsubscribe = store.subscribe(() =>
    this.setState(store.getState())
);}

componentWillUnmount () {
  this.unsubscribe();
}

render(){
  const campuses = this.state.campuses;
  return (
    <HashRouter>
      <div>
        <div className="header">
          <h1 className="header-heading">Campuses</h1>
        </div>
        <hr />
        <ol className="list-group">
          {this.state.campuses.map(campus => {
              return (
                <li key={campus.id}>
                  <Link value={campus.id} to={`/campuses/${campus.id}`}>{campus.name}</Link>
                </li>
              );
            })
          }
        </ol>
        <hr />
      </div>
    </HashRouter>
    );
  }
}

// <ol className="list-group">
// {
//   this.state.campuses.map(campus => {
//     return (
//       <li key={campus.id}>
//         <Link to={`/campuses/${campus.id}`}>{campus.name}</Link>
//       </li>
//     );
//   })
// }
// </ol>
