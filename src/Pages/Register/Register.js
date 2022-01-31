import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
    const [Data,setData] = useState({});
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newData = {...Data};
        newData[field] = value;
        setData(newData);
    }
    const handleRegisterSubmit = e => {
        alert('hello');
        e.preventDefault();
    }
    return (
        <div>
            <h2 className="text-center text-primary">Please Register</h2>
            <Form 
            onSubmit={handleRegisterSubmit}
            style={{marginLeft: '30%', marginRight: '20%'}}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control 
                    type="name" 
                    placeholder="Enter Name" 
                    name="name"
                    onBlur={handleOnBlur}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
                    type="email" 
                    placeholder="Enter email" 
                    name="email"
                    onBlur={handleOnBlur}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                    type="password" 
                    placeholder="Password" 
                    name="password"
                    onBlur={handleOnBlur}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control 
                    type="password" 
                    placeholder="Password" 
                    name="password"
                    onBlur={handleOnBlur}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Register
                </Button>
                <Link style={{textDecoration: 'none'}} to="/login">Already Register Please Login?</Link>
            </Form>
        </div>
    );
};

export default Register;