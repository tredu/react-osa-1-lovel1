import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function App() {
  return (
    <>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Navbar.Brand className="ml-5">Fanikauppa</Navbar.Brand>
    <Nav className="ml-auto mr-5">
      <Navbar.Text className="mr-4">
      Signed in as: <b>User</b>
      </Navbar.Text>
      <Button variant="outline-info">Cart</Button>
      <Button variant="outline-info" className="ml-3">Log Out</Button>
    </Nav>
    </Navbar>
    <Container className="p-4">
    <Row>
      <Col className="text-center" md={8}>
        4
      </Col>
      <Col className="text-center" md={4}>
        4
      </Col>
    </Row>
    </Container>
    </>
  );
}

export default App;
