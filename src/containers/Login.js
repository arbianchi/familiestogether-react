import React, {Component, PropTypes} from 'react';
import { reduxForm } from 'redux-form';
import axios from 'axios';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: ''
    }
  }

  static contextTypes = {
    router: PropTypes.object
  };

  onSubmit(props) {
    this.props.fields.email.value = '';
    this.props.fields.password.value = '';
    axios.post("http://families-together.herokuapp.com/login", props)
     .then( resp => {
       console.log('RESP', resp);
        if ( resp.data.token ) {
          localStorage.setItem('token', resp.data.token);
          this.context.router.push('/requests');
         } else {
       console.log('RESP', resp.data.error);
           if ( resp.data.error ) {
             this.setState({ error: resp.data.error });
           }
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
  			    		    <input className='form-control' placeholder="E-mail" value={email.value || ''} type="text" {...email} />
                    <div className='text-help'>
                      {email.touched ? email.error : ''}
                    </div>

    			    		</div>
  			    	  	<div className={`form-group ${password.touched && password.invalid ? 'has-danger' : ''}`}>
  			    		    <input className="form-control" placeholder="Password" type="password" {...password} />
                    <div className='text-help'>
                      {password.touched ? password.error : ''}
                    </div>
                        <div className='text-help'>
                            { this.state.error }
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
  validate})(Login);
