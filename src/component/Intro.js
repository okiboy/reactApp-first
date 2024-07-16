import React from 'react';
import { Col, Container, Row, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Intro = () => {
  return (
    <div className="intro">
      <Container className="text-white text-center d-flex justify-content-center align-items-center">
        <Row>
          <Col>
            <div className="title">NONTON BEBAS</div>
            <div className="title">TANPA BATAS</div>
            <div className="introButton mt-4 text-center">
              <a href="#trending">
                <Button variant="dark">Liat Semua List</Button>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Intro;
