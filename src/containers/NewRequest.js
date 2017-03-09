import React, {Component, PropTypes} from 'react';
import { reduxForm } from 'redux-form';
import axios from 'axios';
import DateTimePicker from 'react-datetimepicker-bootstrap';


class NewRequest extends Component {

  static contextTypes = {
    router: PropTypes.object
  };

  onSubmit(props) {
    const token = sessionStorage.getItem('token');

    axios.post("http://families-together.herokuapp.com/request", { headers: {'Authorization': token } }, props)
     .then( resp => { sessionStorage.setItem('token', resp.data.token); })
     .then(() => {
       this.context.router.push('/requests/new');
     })
     .catch( err => console.log( err ));
  }

  render() {

    const { fields: { pickup_street, pickup_city, pickup_zipcode, dropoff_street, dropoff_city, dropoff_zipcode, arrival_datetime }, handleSubmit } = this.props;

    return(
      <div className='text-center'>
        <div className="container">
          <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
            <div className="row">
              <div className="col-md-5 col-md-offset-4">
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h2 className="panel-title">Request a Ride</h2>
                  </div>
                  <div className="panel-body">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-4 text-center">
                          <div className="panel panel-default">
                            <div className="panel-heading">
                              <h3 className="panel-title">Pickup Address</h3>
                            </div>
                            <div className="panel-body">
                              <div className="form-group">
                                <input className="form-control" placeholder="Street" type="text" {...pickup_street} />
                              </div>
                              <div className="form-group">
                                <input className="form-control" placeholder="City" type="text" {...pickup_city} />
                              </div>
                              <div className="form-group">
                                <input className="form-control" placeholder="Zipcode" type="text" {...pickup_zipcode} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="container">
                      <div className="row">
                        <div className="col-md-4 text-center">
                          <div className="panel panel-default">
                            <div className="panel-heading">
                              <h3 className="panel-title">Dropoff Address</h3>
                            </div>
                            <div className="panel-body">
                              <div className="form-group">
                                <input className="form-control" placeholder="Street" type="text" {...dropoff_street} />
                              </div>
                              <div className="form-group">
                                <input className="form-control" placeholder="City" type="text" {...dropoff_city} />
                              </div>
                              <div className="form-group">
                                <input className="form-control" placeholder="Zipcode" type="text" {...dropoff_zipcode} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                      <DateTimePicker className="form-control" placeholder="Arrival Date and Time" id="datetimepicker" {...arrival_datetime}/>
                  </div>
                </div>
                      <button type="submit" className="btn btn-primary">Submit Request</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default reduxForm({
  form: 'RequestForm',
  fields: ['pickup_street', 'pickup_city', 'pickup_zipcode', 'dropoff_street', 'dropoff_city', 'dropoff_zipcode', 'arrival_datetime']})(NewRequest);
