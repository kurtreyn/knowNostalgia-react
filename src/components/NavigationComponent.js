import React, { useState } from 'react';
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
  DropdownItem,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import Home from './HomeComponent';
import navLogo from '../images/sunglasses.svg';

const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar light expand="lg" className="custom-nav">
        <NavbarBrand href="/">
          <img src={navLogo} className="nav-logo" />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href={'/home'}>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href={'/about'}>About</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Select Interest
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Movies</DropdownItem>
                <DropdownItem>Music</DropdownItem>
                <DropdownItem>TV Shows</DropdownItem>
                <DropdownItem>Video Games</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
