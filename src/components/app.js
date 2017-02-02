import React, { Component } from 'react';

// import logo from '../logo.svg';
// import '../App.css';
import Registration from '../containers/Registration';
import NavbarContainer from '../containers/NavbarContainer';
// import RequestsList from '../containers/RequestsList';
// import AvailabilityList from '../containers/AvailabilityList';

export default class App extends Component {
  render() {
    return (
      <div>
        <NavbarContainer />
        {this.props.children}
      </div>
    );
  }
}
