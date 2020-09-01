import React from 'react';

import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

const Products = ({ProductData}) => {

    return (
      <>
        {ProductData.map(product =>
          <Col className="product p-4 border m-4 shadow-lg" key={product.id}>
            <h3>{product.name}</h3>
            <p className="text-muted">Category: {product.category}</p>
            <Image className="pic" src={product.picUrl}></Image>
            <br></br>
            <br></br>
            <p>Price: <b>{product.price}</b></p>
            <hr></hr>
            <Button variant="outline-info" className="float-right">Add to Cart</Button>
          </Col>
        )}
      </>
    );
  };

export default Products;