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
  			    	  	<div className={`form-group ${first_name.touched && first_name.invalid ? 'has-danger' : ''}`}>
  			    		    <input className="form-control" placeholder="First Name" type="text" {...first_name} />
                    <div className='text-help'>
                      {first_name.touched ? first_name.error : ''}
                    </div>
    			    		</div>
  			    	  	<div className={`form-group ${last_name.touched && last_name.invalid ? 'has-danger' : ''}`}>
  			    		    <input className="form-control" placeholder="Last Name" type="text" {...last_name} />
                    <div className='text-help'>
                      {last_name.touched ? last_name.error : ''}
                    </div>
    			    		</div>
  			    	  	<div className={`form-group ${email.touched && email.invalid ? 'has-danger' : ''}`}>
  			    		    <input className="form-control" placeholder="E-mail" type="text" {...email} />
                    <div className='text-help'>
                      {email.touched ? email.error : ''}
                    </div>
    			    		</div>
  			    	  	<div className={`form-group ${password.touched && password.invalid ? 'has-danger' : ''}`}>
  			    		    <input className="form-control" placeholder="Password" type="text" {...password} />
                    <div className='text-help'>
                      {password.touched ? password.error : ''}
                    </div>
    			    		</div>
  			    	  	<div className={`form-group ${password_confirmation.touched && password_confirmation.invalid ? 'has-danger' : ''}`}>
  			    		    <input className="form-control" placeholder="Confirm Password" type="text" {...password_confirmation} />
                    <div className='text-help'>
                      {password_confirmation.touched ? password_confirmation.error : ''}
                    </div>
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

function validate(values) {
  const errors = {};
  for( var field in values) {
    if ( !values[field] ) {
      errors[field] = 'Field cannot be blank'
    }
  }
  if (values.password != values.password_confirmation) {
    errors.password_confirmation = 'Password does not match.';
  }
  return errors;
}

export default reduxForm({
  form: 'RegistrationForm',
  fields: ['first_name', 'last_name', 'email', 'password', 'password_confirmation'], validate}
, null, null)(Registration);