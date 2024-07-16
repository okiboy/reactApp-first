import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavbarNav = () => {
  return (
    <div>
      <Navbar variant="dark">
        <Container>
        <Navbar.Brand>BIOSKOP KERENIN</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#trending">TRENDING</Nav.Link>
            <Nav.Link href="#superhero">SUPERHERO</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarNav;
