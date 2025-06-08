import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navigation = () => {
  const isLoggedIn = !!localStorage.getItem('token');

  return (
    <Navbar bg="light" expand="lg" className="mb-4 shadow-sm">
      <Container>
        <Navbar.Brand as={Link} to={isLoggedIn ? "/dashboard" : "/"}>
          <div className="d-flex align-items-center">
            <img
              src={logo}
              alt="Finance Tracker Logo"
              height="40"
              className="me-2"
              style={{ maxHeight: '40px' }}
            />
            <span className="fw-bold">Finance Tracker</span>
          </div>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <LinkContainer to="/dashboard">
              <Nav.Link>Dashboard</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/transactions">
              <Nav.Link>Transactions</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
