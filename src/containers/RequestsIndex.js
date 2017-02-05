import React, { Component } from 'react';
import axios from 'axios';
import Request from '../components/Request';
import { connect } from 'react-redux';
import { fetchRequests} from '../actions/index'; 
import { Link } from 'react-router';

export default class RequestsIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      requests: [],
      token: null
    };
  }
  // componentWillMount() {
  //   this.props.fetchRequests();
  // }
  
  componentDidMount() {
    axios.post("http://b106753d.ngrok.io/login", {
      email: "r@r.com",
      password: "password"
    })
    .then( resp => {
      const token = resp.data.token;
      this.setState({ token });
      axios.get(`http://b106753d.ngrok.io/requests.json`, {
        headers: {'Authorization': token }
      })
      .then( json  => {
        console.log('json', json.data)
        this.setState({ requests: json.data.ride_requests});
      })
      .catch( err => console.log( err )); 
      })
    .catch( err => console.log( err ));
    
    // this.setState({ requests: dummy.requests});
  }

  render() {
    debugger;
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
      </div>
    );
  }
}
