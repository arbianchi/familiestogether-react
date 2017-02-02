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
      requests: []
    };
  }
  
  getCurrentUserId() {
    return 3;
  }
  
  componentDidMount() {
    // let userId = getCurrentUserId();
    // axios.get("http://families-together.herokuapp.com/users/${userId}/requests.json")
    // .then( response => response.json() )
    // .then( json  => {
    //   const status = json.requests.map(request => request.status);
    //   this.setState({ status: status});
    //   console.log( this.state );
    // })
    // .catch( err => console.log( err )); 
    
    this.setState({ requests: dummy.requests});
  }

  render() {
    const requests = this.state.requests.map(request => ( <Request  key={request.id} request={request}/> ));
    
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
