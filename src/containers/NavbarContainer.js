import React, { Component } from 'react';
import { Nav, Navbar, NavDropdown, NavItem, MenuItem, Jumbotron, Button  } from 'react-bootstrap';
import { Link } from 'react-router';


export default class NavbarContainer extends Component {
  renderNavItems(){
    if (localStorage.token){
      return(
        <Nav>
          <NavItem eventKey={3} href="/requests">Requests</NavItem>
          <NavItem eventKey={4} href="/availability">Availability</NavItem>
          <NavItem eventKey={2} href="/login" onClick={localStorage.clear()}>Logout</NavItem>
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
    let loggedIn = localStorage.token ? true : false;
    console.log('loggedin', loggedIn);
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