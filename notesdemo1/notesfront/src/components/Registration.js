import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const Registration = () => {
    return (
        <Row className="text-center justify-content-center">
        <Col xs={4}>
        <br></br>
        <h2>Registration</h2>
        <br></br>
        <Form>
            <Form.Group>
                <Form.Label>Username</Form.Label>
                <Form.Control type="username" placeholder="Username"/>
            </Form.Group>

            <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Email"/>
            </Form.Group>

            <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password"/>
            </Form.Group>



            <Button variant="primary" type="submit">
                Submit
            </Button>

            <hr></hr>
        </Form>
        </Col>
        </Row>
    )
}

export default Registration;