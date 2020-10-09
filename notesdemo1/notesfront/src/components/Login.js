import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Login = ({submitHandler}) => {
    const [userName, setUserName] = useState("");
    const [userPassword, setUserPassword] = useState("");
    return (
        <Row className="text-center justify-content-center">
        <Col xs={4}>
        <br></br>
        <h2>Login</h2>
        <br></br>
        <Form onSubmit={e=>submitHandler(e, {username: userName, password: userPassword})}>
            <Form.Group>
                <Form.Label>Username</Form.Label>
                <Form.Control onChange={event => setUserName(event.target.value)} type="username" placeholder="Username" />
            </Form.Group>

            <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control onChange={event => setUserPassword(event.target.value)} type="password" placeholder="Password" />
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