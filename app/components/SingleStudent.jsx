
import React, { Component } from 'react';
import axios from 'axios';
import store, { fetchStudent, deleteStudent} from '../store';
import { Link, HashRouter } from 'react-router-dom';


export default class SingleStudent extends Component {

  constructor() {
    super();
    this.state = store.getState();
    this.handleDeleteStudent = this.handleDeleteStudent.bind(this)
  }

  componentDidMount() {
    const studentId = this.props.match.params.studentId;
    store.dispatch(fetchStudent(studentId));
    this.unsubscribe = store.subscribe(() =>
      this.setState(store.getState())
    );
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  handleDeleteStudent() {
    const studentId = this.state.singleStudent.selectedStudent.id;
    store.dispatch(deleteStudent(studentId));
  }

  render() {
    const student = this.state.singleStudent.selectedStudent;
    const campus = this.state.campuses.campuses.find( (campus) => student.campusId === campus.id);
    const newObj = Object.assign({}, campus)
    const campusName = newObj.name
    // const campusName = campus.name;
    return (
      <HashRouter>
        <div>
          <div className="header">
            <h1 className="header-heading">Student Details</h1>
          </div>
          <hr />
          <h3>Student Name:   {student.name} </h3>
          <h3>Student Email:   {student.email}</h3>
          <h3>Student's Campus:  {campusName}</h3>
          <br />
          <p><Link to={'/editstudent'} className="btn">Edit Student</Link></p>
          <p><a href="#" value ={student.id} className="btn" onClick={this.handleDeleteStudent}>Delete Student</a></p>

          <hr />
        </div>
      </HashRouter>
    );
  }
}





// import React, { Component } from 'react';
// import store, {fetchStudent} from '../store'
// import axios from 'axios';

// export default class SingleStudent extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       selectedStudent: {}
//     };
//   }

//   componentDidMount(){
//     const studentId = this.props.match.params.studentId;
//     axios.get(`/api/students/${studentId}`)
//     .then(res => res.data)
//     .then(student => {
//       this.setState({selectedCampus: student})
//     });
//   }

// render(){
//   console.log("got here!");
//   return(
//       <div>
//         <h5>got to single students page!</h5>
//       </div>
//     )
//   }
// }
