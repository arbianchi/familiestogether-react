import React, {Component, PropTypes} from 'react';
import { reduxForm } from 'redux-form';
import axios from 'axios';
import AddressForm from '../components/Address';
import DateTimePicker from 'react-datetimepicker-bootstrap';


class NewRequest extends Component {

  static contextTypes = {
    router: PropTypes.object
  };

  onSubmit(props) {
    const token = localStorage.getItem('token');

    axios.post("http://families-together.herokuapp.com/request", { headers: {'Authorization': token } }, props)
     .then( resp => { localStorage.setItem('token', resp.data.token); })
     .then(() => {
       this.context.router.push('/requests/new');
     })
     .catch( err => console.log( err ));
  }

  render() {

    const { fields: { pickup_address, dropoff_address, arrival_datetime }, handleSubmit } = this.props;

    return(
      <div>
        <h1>Request a Ride</h1>
	  	  <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <div className="container">
            <div className="row">
          		<div className="col-md-4 col-md-offset-4">
            		<div className="panel panel-default">
        			  	<div className="panel-heading">
        			    	<h3 className="panel-title">Request a Ride</h3>
        			 	  </div>
        			  	<div className="panel-body">
                      <AddressForm {...pickup_address} />
                      <AddressForm {...dropoff_address} />
        			    </div>
          			</div>
                <div className="m-b-l">
                  <DateTimePicker className="form-control" placeholder="Arrival Date and Time" id="datetimepicker" {...arrival_datetime}/>
                </div>
          		</div>
          	</div>
          </div>
        	<button type="submit" className="btn btn-primary">Submit Request</button>
      	</form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'RequestForm',
  fields: ['pickup_address', 'dropoff_address', 'arrival_datetime']}
, null, null)(NewRequest);
