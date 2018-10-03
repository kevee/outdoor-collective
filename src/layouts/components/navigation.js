import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap'
import Link from 'gatsby-link'

class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
      <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
        <Link to="/" className="navbar-brand">The Outdoor Collective</Link>
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <Link className="nav-link" to="/trainings">Trainings</Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link"  to="/contact">Contact</Link>
              </NavItem>
            </Nav>
        </Collapse>
      </nav>
    )
  }
}

export default Navigation