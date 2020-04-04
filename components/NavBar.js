import React, { useState, useEffect } from "react";
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
import { useSelector} from 'react-redux';


const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const globalState = useSelector(state => state);

  useEffect(() => {
    console.log(globalState);
  }, [])

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
            <Link href={props.order ? "/cart" : "/order"}><Button className="d-block" color="primary">{props.order ? `View Cart [ ${globalState.order.totalCartQuantity} ]` : "Order Now!"}</Button></Link>
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;
