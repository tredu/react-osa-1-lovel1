import React from 'react';

import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';


const Cart = () => {

    return (
      <>
      <Col className="cart p-4 border border-info rounded m-4 shadow-lg mt-5 align-self-start fixed sticky-top" >
        <h3>Cart</h3>
        <hr></hr>
        <div>
        <p>asd</p>
        </div>
        <hr></hr>
        <p><b>Total:</b></p>
        <Button variant="outline-info" className="float-right text-center">Check Out</Button>
      </Col>
      </>
    );
  };

export default Cart;