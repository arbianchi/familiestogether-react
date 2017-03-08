import React, { Component } from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';

export default class NavbarContainer extends Component {
  renderNavItems(){

    function logout() {
        sessionStorage.clear();
    }

    if (sessionStorage.token){
      return(
        <Nav>
          <NavItem eventKey={3} href="/requests">Requests</NavItem>
          <NavItem eventKey={4} href="/availability">Availability</NavItem>
          <NavItem eventKey={2} href="/login" onClick={logout}>Logout</NavItem>
        </Nav>
      );
    } else {
      return(
        <Nav>
          <NavItem eventKey={1} href="/register">Register</NavItem>
          <NavItem eventKey={2} href="/login">Login</NavItem>
        </Nav>
      );
    }
  }

  render() {
    let loggedIn = sessionStorage.token ? true : false;
    console.log('loggedin', sessionStorage.token);
    return (
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">FamiliesTogether</a>
            </Navbar.Brand>
          </Navbar.Header>
            { this.renderNavItems() }
        </Navbar>
      </div>
    );
  }
}
