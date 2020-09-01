import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/NavbarComponent.js';
import ProductData from './components/ProductData.js';
import Products from './components/Products.js';
import Cart from './components/Cart.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <>
    <NavbarComponent />
    <Container fluid>
    <Row>
    <Col xs={8}>
    <Row md="4" className="mainRow mt-5 justify-content-center ">
    <Products ProductData = {ProductData} />
    </Row>
    </Col>
    <Cart />
    </Row>
    </Container>
    </>
  );
}

export default App;
