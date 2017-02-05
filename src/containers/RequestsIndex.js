import React, { Component } from 'react';
import axios from 'axios';
import Request from '../components/Request';

const dummy = {
    "requests": [
        {
            "request_id": "1",
            "rider": {
                "id": "1",
                "full_name": "foo bar",
            },
            "volunteer": {
                "id": "2",
                "full_name": "volunt teer",
            },
            "route": {
                "id": "3",
                "pickup_address": "address1",
                "dropoff_address": "address2",
                "distance": "3.1"
            },
            "arrival_time": "sometime",
            "status": "confirmed"
        },
        {
            "request_id": "2",
            "rider": {
                "id": "1",
                "full_name": "bar foo",
            },
            "volunteer": {
                "id": "2",
                "full_name": "other volunteer",
            },
            "route": {
                "id": "5",
                "pickup_address": "address1",
                "dropoff_address": "address2",
                "distance": "4.1"
            },
            "arrival_time": "sometime",
            "status": "pending",
        }
    ]
};

export default class RequestsIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      requests: [],
      token: null
    };
  }
  
  getCurrentUserId() {
    return 3;
  }
  
  componentDidMount() {
    let userId = 28;
    axios.post("http://47d99e03.ngrok.io/login", {
      email: "r@r.com",
      password: "password"
    })
    .then( resp => {
      const token = resp.data.token;
      this.setState({ token });
      console.log('TOKEN', token)
      
      axios.get(`http://47d99e03.ngrok.io/users/${userId}/ride/requests.json`, {
        headers: {'Authorization': token }
      })
      .then( json  => {
        this.setState({ requests: json.requests});
        console.log( this.state );
      })
      .catch( err => console.log( err )); 
      })
    .catch( err => console.log( err ));
    
    // this.setState({ requests: dummy.requests});
  }

  render() {
    console.log( this.state );
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
