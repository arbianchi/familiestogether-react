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
    
    const { fields: { role, phone, gender, street, city, state, zipcode }, handleSubmit } = this.props;

    return(
      <div>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <div className="container">
            <div className="row">
              <div className="col-md-4 col-md-offset-4">
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h3 className="panel-title">Profile</h3>
                  </div>
                  <div className="form-group">
                      <label className="radio-inline"><input type="radio" name="male" {...role}/>Volunteer</label>
                      <label className="radio-inline"><input type="radio" name="female" {...role}/>Rider</label>
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
                        <select className="form-control" placeholder="Select State" type="select" {...state} >
                            <option value="">N/A</option>
                            <option value="AK">Alaska</option>
                            <option value="AL">Alabama</option>
                            <option value="AR">Arkansas</option>
                            <option value="AZ">Arizona</option>
                            <option value="CA">California</option>
                            <option value="CO">Colorado</option>
                            <option value="CT">Connecticut</option>
                            <option value="DC">District of Columbia</option>
                            <option value="DE">Delaware</option>
                            <option value="FL">Florida</option>
                            <option value="GA">Georgia</option>
                            <option value="HI">Hawaii</option>
                            <option value="IA">Iowa</option>
                            <option value="ID">Idaho</option>
                            <option value="IL">Illinois</option>
                            <option value="IN">Indiana</option>
                            <option value="KS">Kansas</option>
                            <option value="KY">Kentucky</option>
                            <option value="LA">Louisiana</option>
                            <option value="MA">Massachusetts</option>
                            <option value="MD">Maryland</option>
                            <option value="ME">Maine</option>
                            <option value="MI">Michigan</option>
                            <option value="MN">Minnesota</option>
                            <option value="MO">Missouri</option>
                            <option value="MS">Mississippi</option>
                            <option value="MT">Montana</option>
                            <option value="NC">North Carolina</option>
                            <option value="ND">North Dakota</option>
                            <option value="NE">Nebraska</option>
                            <option value="NH">New Hampshire</option>
                            <option value="NJ">New Jersey</option>
                            <option value="NM">New Mexico</option>
                            <option value="NV">Nevada</option>
                            <option value="NY">New York</option>
                            <option value="OH">Ohio</option>
                            <option value="OK">Oklahoma</option>
                            <option value="OR">Oregon</option>
                            <option value="PA">Pennsylvania</option>
                            <option value="PR">Puerto Rico</option>
                            <option value="RI">Rhode Island</option>
                            <option value="SC">South Carolina</option>
                            <option value="SD">South Dakota</option>
                            <option value="TN">Tennessee</option>
                            <option value="TX">Texas</option>
                            <option value="UT">Utah</option>
                            <option value="VA">Virginia</option>
                            <option value="VT">Vermont</option>
                            <option value="WA">Washington</option>
                            <option value="WI">Wisconsin</option>
                            <option value="WV">West Virginia</option>
                            <option value="WY">Wyoming</option>
                        </select>
                    </div>           
                    <div className="form-group">
                      <input className="form-control" placeholder="Zipcode" type="text" {...zipcode} />
                    </div>
                    <div className="form-group">
                      <label className="radio-inline"><input type="radio" name="male" {...gender}/>Male</label>
                      <label className="radio-inline"><input type="radio" name="female" {...gender}/>Female</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button type="submit" className="btn btn-primary">Create Profile</button>
          </div>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};
  const phonePattern = /^(()?\d{3}())?(-|\s)?\d{3}(-|\s)?\d{4}$/;
  const emailPattern = /(.+)@(.+){2,}\.(.+){2,}/;
   
  if (!values.email || !emailPattern.test(values.email)) {
    errors.email = 'Please enter a valid email address.';
  }
  if (!values.phone|| !phonePattern.test(values.phone)) {
    errors.email = 'Please enter a valid phone number.';
  }
  if (!values.password) {
    errors.password = 'Password required.';
  } else if ( values.password.length < 7) {
    errors.password = 'Passwords must be a least 6 characters long.';
  }
  return errors;
}

export default reduxForm({
  form: 'NewProfileForm',
  fields: ['role', 'gender', 'phone', 'street', 'city', 'state', 'zipcode'], validate}
, null, null)(ProfileForm);
