import React, {Component, PropTypes} from 'react';
import { reduxForm } from 'redux-form';
import axios from 'axios';

class Login extends Component {
  
  static contextTypes = {
    router: PropTypes.object
  };
  
  onSubmit(props) {
    axios.post("http://families-together.herokuapp.com/login", props)
     .then( resp => { localStorage.setItem('token', resp.data.token); })
     .then(() => {
       this.context.router.push('/requests');
     })
     .catch( err => console.log( err )); 
  }
  
  render() {
    
    const { fields: { email, password}, handleSubmit } = this.props;

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
  			    	  	<div className="form-group">
  			    		    <input className="form-control" placeholder="E-mail" type="text" {...email} />
    			    		</div>
  			    	  	<div className="form-group">
  			    		    <input className="form-control" placeholder="Password" type="text" {...password} />
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
  form: 'LoginForm',
  fields: ['email', 'password']}
, null, null)(Login);