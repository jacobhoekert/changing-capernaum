import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
  Button
} from "reactstrap";
import Link from "next/link";
import '../styles/nav_bar.scss';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand className="ml-4" href="/">
          Changing Capernaum
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link href="/story">
                <NavLink>Our Story</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link href="/movement">
                <NavLink>Join the Movement</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link href="/contact">
                <NavLink>Contact</NavLink>
              </Link>
            </NavItem>
          </Nav>
          <NavbarText className="d-block">
            <Link href="/order"><Button className="d-block" color="primary">Order Now!</Button></Link>
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;
