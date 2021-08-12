import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarText,
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from '../../assets/logo.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const logout = () => {
    localStorage.removeItem('customer');
    localStorage.removeItem('name');

    window.location.href = '/';
  };

  return (
    <div>
      <Navbar color="white" light expand="md" className="mb-4">
        <NavbarBrand href="/inicio">
          <img src={Logo} width="70" height="70" alt="logo" />
        </NavbarBrand>

        <NavbarToggler onClick={toggle} />

        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavbarText className="mr-2">Você logou como:</NavbarText>

            <NavbarText className="mr-4 user">
              {localStorage.getItem('name')}
            </NavbarText>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                <FontAwesomeIcon icon="user" />
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem href="/reservas">Minhas Reservas</DropdownItem>
                <DropdownItem divider />
                <DropdownItem onClick={logout}>Sair</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
