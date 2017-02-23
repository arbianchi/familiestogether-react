import React, { Component } from 'react';
import NavbarContainer from '../containers/NavbarContainer';

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

