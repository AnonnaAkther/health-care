import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const {signInUsingGoogle} = useAuth();
    const [Data,setData] = useState({});
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newData = {...Data};
        newData[field] = value;
        setData(newData);
    }
    const handleLoginSubmit = e => {
        alert('hello');
        e.preventDefault();
    }
    return (
        <div>
            <h2 className="text-primary text-center mt-3 mb-3">Please Login</h2>
        <Form
        onSubmit={handleLoginSubmit} 
        style={{marginLeft: '30%', marginRight: '20%'}}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control 
                type="email" 
                placeholder="Enter email" 
                name="email"
                onBlur={handleOnBlur}
                />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
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
            <Button variant="primary" type="submit">
                Login
            </Button>
            <Link style={{textDecoration: 'none'}} to="/register">New User Please Register?</Link>
            __________________________________
        </Form>
        <button onClick={signInUsingGoogle} className="btn btn-primary">Google Sign In</button>
        </div>
    );
};

export default Login;