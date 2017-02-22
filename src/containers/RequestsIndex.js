import React, { Component } from 'react';
import axios from 'axios';
import Request from '../components/Request';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class RequestsIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      requests: []
    };
  }
  componentDidMount() {
    const token = localStorage.getItem('token');
    console.log('TOKEN', token);
    
    axios.get("http://families-together.herokuapp.com/users/2/ride/requests.json", {
      headers: {'Authorization': token }
    })
    .then( json  => {
      this.setState({ requests: json.data.ride_requests});
    })
    .catch( err => console.log( err )); 
  }
  
  
  render() {
    const requests = this.state.requests.map(request => ( <Request request={request}/> ));
    
    return (
      <div>
        <h2>Requests</h2>
        <div className="panel panel-default">
          <div className="panel-heading">
            <h2 className="panel-title">
              Request Information
            </h2>
          </div>
          <table className="table table-bordered table-hover panel-body">
            <thead>
              <tr>
                <th>Rider</th>
                <th>Volunteer</th>
                <th>Status</th>
                <th>Pick Up</th>
                <th>Drop Off</th>
                <th>Distance</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              { requests }
            </tbody>
          </table>
        </div>
        <div className='m-t-l'>
          <Link to="requests/new" className='btn btn-primary'>New Request</Link>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { token: state.token };
}

export default connect(mapStateToProps)(RequestsIndex);