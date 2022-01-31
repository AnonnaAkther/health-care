import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
  const {user, logOut} = useAuth();
    return (
        
        <>
  <Navbar bg="light" variant="light" sticky="top">
    <Container>
    <Navbar.Brand href="#home">Health Care</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
    <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
      <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
      <Nav.Link as={HashLink} to="/doctors">Doctors</Nav.Link>
      <Nav.Link as={HashLink} to="/aboutUs">AboutUs</Nav.Link>
      { user?.email ?
       <div>
       <Button onClick={logOut} variant="primary">Logout</Button>
       </div>:
       <NavLink style={{textDecoration: 'none', marginRight: '10px'}} as={Link} to="/login">Login</NavLink>
        }
      <Navbar.Text>Welcome To: <a href="#login">{user.displayName}</a>
      </Navbar.Text>
    </Navbar.Collapse>
    </Container>
  </Navbar>
</>
    );
};

export default Header;