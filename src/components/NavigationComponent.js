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
import navLogo from '../images/sunglasses.png';

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
              <NavLink>
                <Link to="/">Home</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to="/about">About</Link>
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Select Interest
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  {' '}
                  <Link to="/movies">Movies</Link>
                </DropdownItem>
                <DropdownItem>
                  {' '}
                  <Link to="/music">Music</Link>
                </DropdownItem>
                <DropdownItem>
                  {' '}
                  <Link to="/tvshows">TV Shows</Link>
                </DropdownItem>
                <DropdownItem>
                  {' '}
                  <Link to="/videogames">Video Games</Link>
                </DropdownItem>
                <DropdownItem>
                  {' '}
                  <Link to="/preview">Preview</Link>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
