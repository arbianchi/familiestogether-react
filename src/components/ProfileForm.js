import React, {Component, PropTypes} from 'react';
import { reduxForm } from 'redux-form';
import axios from 'axios';

class ProfileForm extends Component {
  
  static contextTypes = {
    router: PropTypes.object
  };
  
  onSubmit(props) {
    axios.post("http://families-together.herokuapp.com/profile/new", props)
     .then( resp => { 
       localStorage.setItem('token', resp.data.token); 
        if ( localStorage.token.length) {
          this.context.router.push('/profile');
         } else {
          this.context.router.push('/profile/new');
         }
     })
     .catch( err => console.log( err )); 
     
  }
  
  render() {
    
    const { fields: { phone, gender, street, city, state, zipcode }, handleSubmit } = this.props;

    return(
      <div>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <div className="container">
            <div className="row">
              <div className="col-md-4 col-md-offset-4">
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h3 className="panel-title">Request a Ride</h3>
                  </div>
                  <div className="panel-body">
                    <div className="form-group">
                      <input className="form-control" placeholder="Phone" type="text" {...phone} />
                    </div>
                    <div className="form-group">
                      <input className="form-control" placeholder="Street" type="text" {...street} />
                    </div>
                    <div className="form-group">
                      <input className="form-control" placeholder="City" type="text" {...city} />
                    </div>
                    <div className="form-group">
                      <input className="form-control" placeholder="State" type="text" {...state} />
                    </div>
                    <div className="form-group">
                      <input className="form-control" placeholder="Zipcode" type="text" {...zipcode} />
                    </div>
                    <div className="form-group">
                      <label className="radio-inline"><input type="radio" name="male"/>Male</label>
                      <label className="radio-inline"><input type="radio" name="female"/>Female</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">Create Profile</button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};
  // const phonePattern = /(.+)@(.+){2,}\.(.+){2,}/;
  // 
  // if (!values.email || !emailPattern.test(values.email)) {
  //   errors.email = 'Please enter a valid email address.';
  // }
  // if (!values.password) {
  //   errors.password = 'Password required.';
  // } else if ( values.password.length < 7) {
  //   errors.password = 'Passwords must be a least 6 characters long.';
  // }
  return errors;
}

export default reduxForm({
  form: 'NewProfileForm',
  fields: ['gender', 'phone', 'street', 'city', 'state', 'zipcode'], validate}
, null, null)(ProfileForm);