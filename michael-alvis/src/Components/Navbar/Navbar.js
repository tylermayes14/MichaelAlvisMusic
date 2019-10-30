// Navbar component

import React, { useState } from 'react';
import './Navbar.css';
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
    DropdownItem } from 'reactstrap';
  
  const NavBar = (props) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
  
    return (
      <div>
        <Navbar dark expand="md" className="text">
          <NavbarBrand href="/">Michael Alvis | DJ, Producer, Mixer</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">About Me</NavLink>
              </NavItem>
              <NavItem>
                <NavLink>Services</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Contact Me
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Need a DJ?
                  </DropdownItem>
                  <DropdownItem>
                    Need a producer?
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Want to support me?
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }

export default NavBar;