/** @format */

import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
const Header = () => {
  return (
    <div>
      <header>
        <Navbar bg="primary" variant="dark" expant="lg" collapseOnSelect>
          <Container>
            <Navbar.Brand href="/">BRAND</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="/cart">
                  <i className="fas fa-shopping-cart"></i>
                  Cart
                </Nav.Link>
                <Nav.Link href="/login">
                  <i className="fas fa-user"></i>
                  Sign In
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </div>
  );
};

export default Header;
