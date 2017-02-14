import React, { Component } from 'react';
import axios from 'axios';
import { SingleDatePicker } from 'react-dates';
import { DateRangePicker } from 'react-dates';



import Availability from '../components/Availability';

const dummy = {
    "availabilities": [
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

export default class AvailabilityIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      availabilities: [],
      date: null,
      focused: false,
      focusedInput: null,
      startDate: null,
      endDate: null
    };
    
    
    this.onDatesChange = this.onDatesChange.bind(this);
    this.onFocusChange = this.onFocusChange.bind(this);
  }
  
  getCurrentUserId() {
    return 3;
  }
  
  onDatesChange({ startDate, endDate }) {
    this.setState({ startDate, endDate });
  }

  onFocusChange(focusedInput) {
    this.setState({ focusedInput });
  }

  
  componentDidMount() {
    // let userId = getCurrentUserId();
    // axios.get("http://families-together.herokuapp.com/users/${userId}/availabilities.json")
    // .then( response => response.json() )
    // .then( json  => {
    //   this.setState({ requests: json.requests });
    // })
    // .catch( err => console.log( err )); 
    
    this.setState({ availabilities: dummy.availabilities });
  }

  render() {
    const { focusedInput, startDate, endDate } = this.state;

    const availabilities = this.state.availabilities.map( availability => ( <Availability availability={availability} key={availability.id}/> ));
    
    return (
      <div>
        <h2>My Availability</h2>

        <div className="panel panel-default">
          <div className="panel-heading">
            <h2 className="panel-title">
              Available Times  
            </h2>
          </div>
          <table className="table table-bordered table-hover panel-body">
            <thead>
              <tr>
                <th>Start</th>
                <th>End</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              { availabilities }
            </tbody>
          </table>
        </div>
        <div>
           <DateRangePicker
             {...this.props}
             onDatesChange={this.onDatesChange}
             onFocusChange={this.onFocusChange}
             focusedInput={focusedInput}
             startDate={startDate}
             endDate={endDate}
           />
         </div>
      </div>
    );
  }
}
