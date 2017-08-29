import React, { Component } from 'react';
import axios from 'axios';

export default class SingleStudent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedStudent: {}
    };
  }

  componentDidMount(){
    const studentId = this.props.match.params.studentId;
    axios.get(`/api/students/${studentId}`)
    .then(res => res.data)
    .then(student => {
      this.setState({selectedCampus: student})
    });
  }

render(){
  console.log("got here!");
  return(
      <div>
        <h5>got to single students page!</h5>
      </div>
    )
  }
}
