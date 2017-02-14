import React, {Component, PropTypes} from 'react';
import { reduxForm } from 'redux-form';
import axios from 'axios';
import DateTimePicker from 'react-datetimepicker-bootstrap';


class Address extends Component {
  
  static contextTypes = {
    router: PropTypes.object
  };
  
  
  render() {
    
    const { fields: { street, city, state, zipcode}} = this.props;

    return(
      <div>
		  	  <form>
        
        <div className="container">

          <div className="row">
        		<div className="col-md-4 col-md-offset-4">
          		<div className="panel panel-default">
      			  	<div className="panel-heading">
      			    	<h3 className="panel-title">Request a Ride</h3>
      			 	  </div>
      			  	<div className="panel-body">
    			    	  	<div className="form-group">
    			    		    <input className="form-control" placeholder="Pick Up Address" type="text" {...street} />
      			    		</div>
    			    	  	<div className="form-group">
    			    		    <input className="form-control" placeholder="Drop Off Address" type="text" {...city} />
      			    		</div>
      			    </div>
        			</div>
        		</div>
        	</div>
        </div>
      	</form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'AddressForm',
  fields: ['pickup_address', 'dropoff_address', 'arrival_datetime']}
, null, null)(Address);