import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-light mt-4">
      <Container>
        <Row>
          <Col className="text-center py-3">
            &copy; 2024 Create by Gedeon
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
