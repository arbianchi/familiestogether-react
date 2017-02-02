import React, { Component } from 'react';
import { Nav, Navbar, NavDropdown, NavItem, MenuItem, Jumbotron, Button  } from 'react-bootstrap';
import { Link } from 'react-router';


export default class NavbarContainer extends Component {
  render() {
    return (
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">FamiliesTogether</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem eventKey={1} href="/register">Register</NavItem>
            <NavItem eventKey={2} href="/login">Login</NavItem>
            <NavItem eventKey={3} href="/requests">Requests</NavItem>
            <NavItem eventKey={4} href="/availability">Availability</NavItem>
          </Nav>
        </Navbar>    
      </div>
    );
  }
}