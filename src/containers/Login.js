import React, {Component, PropTypes} from 'react';
import { reduxForm } from 'redux-form';
import axios from 'axios';

class Login extends Component {
  
  static contextTypes = {
    router: PropTypes.object
  };
  
  onSubmit(props) {
    axios.post("http://families-together.herokuapp.com/login", props)
     .then( resp => { 
       localStorage.setItem('token', resp.data.token); 
       console.log('toktok', localStorage.token);
        if ( localStorage.token.length) {
          this.context.router.push('/requests');
         } else {
          this.context.router.push('/login');
         }
     })
     .catch( err => console.log( err )); 
     
  }
  
  render() {
    
    const { fields: { email, password}, pristine, submitting, handleSubmit } = this.props;

    return(
      <div className="container">
        <div className="row">
      		<div className="col-md-4 col-md-offset-4">
        		<div className="panel panel-default">
    			  	<div className="panel-heading">
    			    	<h3 className="panel-title">Please sign in</h3>
    			 	  </div>
    			  	<div className="panel-body">
    			  	  <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
  			    	  	<div className={`form-group ${email.touched && email.invalid ? 'has-danger' : ''}`}>
  			    		    <input className='form-control' placeholder="E-mail" type="text" {...email} />
                    <div className='text-help'>
                      {email.touched ? email.error : ''}
                    </div>
                
    			    		</div>
  			    	  	<div className={`form-group ${password.touched && password.invalid ? 'has-danger' : ''}`}>
  			    		    <input className="form-control" placeholder="Password" type="password" {...password} />
                    <div className='text-help'>
                      {password.touched ? password.error : ''}
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
  const emailPattern = /(.+)@(.+){2,}\.(.+){2,}/;
  
  if (!values.email || !emailPattern.test(values.email)) {
    errors.email = 'Please enter a valid email address.';
  }
  if (!values.password) {
    errors.password = 'Password required.';
  } else if ( values.password.length < 7) {
    errors.password = 'Passwords must be a least 6 characters long.';
  }
  return errors;
}

export default reduxForm({
  form: 'LoginForm',
  fields: ['email', 'password'],
  validate, null, null})(Login);