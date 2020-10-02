import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormLabel from 'react-bootstrap/FormLabel';
import FormGroup from 'react-bootstrap/FormGroup';
import FormControl from 'react-bootstrap/FormControl';

const Login = ({submitHandler}) => {
    return (
        <Row className="text-center justify-content-center">
        <Col xs={4}>
        <br></br>
        <h2>Login</h2>
        <br></br>
        <Form onSubmit={e=>submitHandler(e, {username: "user1", password:"salasana"})}>
            <Form.Group>
                <Form.Label>Username</Form.Label>
                <Form.Control type="username" placeholder="Username" />
            </Form.Group>

            <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Login
            </Button>
            
            <hr></hr>
        </Form>
        </Col>
        </Row>
    )
}

export {Login};