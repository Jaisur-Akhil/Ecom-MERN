/** @format */

import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <header>
        <Navbar bg="primary" variant="dark" expant="lg" collapseOnSelect>
          <Container>
            <Link to="/">
              <Navbar.Brand>BRAND</Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Link to="/cart">
                  <Nav.Link>
                    <i className="fas fa-shopping-cart"></i>
                    Cart
                  </Nav.Link>
                </Link>
                <Link to="/login">
                <Nav.Link>
                  <i className="fas fa-user"></i>
                  Sign In
                </Nav.Link>
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </div>
  );
};

export default Header;
