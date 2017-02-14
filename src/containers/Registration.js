import React, {Component, PropTypes} from 'react';
import { reduxForm } from 'redux-form';
import axios from 'axios';

class Registration extends Component {
  
  static contextTypes = {
    router: PropTypes.object
  };
  
  onSubmit(props) {
    axios.post("http://families-together.herokuapp.com/register", props)
     .then( resp => { localStorage.setItem('token', resp.data.token); })
     .then(() => {
       this.context.router.push('/profile');
     })
     .catch( err => console.log( err )); 
  }
  
  render() {
    
    const { fields: { first_name, last_name, email, password, password_confirmation }, handleSubmit } = this.props;

    return(
      <div className="container">
        <div className="row">
      		<div className="col-md-4 col-md-offset-4">
        		<div className="panel panel-default">
    			  	<div className="panel-heading">
    			    	<h3 className="panel-title">Register</h3>
    			 	  </div>
    			  	<div className="panel-body">
    			  	  <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
  			    	  	<div className="form-group">
  			    		    <input className="form-control" placeholder="First Name" type="text" {...first_name} />
    			    		</div>
  			    	  	<div className="form-group">
  			    		    <input className="form-control" placeholder="Last Name" type="text" {...last_name} />
    			    		</div>
  			    	  	<div className="form-group">
  			    		    <input className="form-control" placeholder="E-mail" type="text" {...email} />
    			    		</div>
  			    	  	<div className="form-group">
  			    		    <input className="form-control" placeholder="Password" type="text" {...password} />
    			    		</div>
  			    	  	<div className="form-group">
  			    		    <input className="form-control" placeholder="Confirm Password" type="text" {...password_confirmation} />
    			    		</div>
    			    		<button type="submit" className="btn btn-primary">Submit</button>
    			      </form>
    			    </div>
      			</div>
      		</div>
      	</div>
      </div>
    );
  }
}

export default reduxForm({
  form: 'RegistrationForm',
  fields: ['first_name', 'last_name', 'email', 'password', 'password_confirmation']}
, null, null)(Registration);