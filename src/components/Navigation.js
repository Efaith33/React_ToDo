import React from 'react';
import {Nav, Navbar} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { useAuth } from "./context/AuthContext";

export default function Navigation() {
  const { currentUser, authenticate, logout } = useAuth();

  return (
    <Navbar variant="dark" bg="dark" expand="md" className="p-3">
      <Navbar.Brand href="/">React ToDo</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
       <Nav className='mr-auto'>
         {currentUser &&
         <> 
         <Link to="/todo" className='nav-link'>Todo</Link>
         <Link to="/categories" className='nav-link'>Categories</Link>
         </>
        }
         <Link to="/login" className='nav-link'>Login</Link>
         <Link to="/bootstrap" className='nav-link'>Bootstrap</Link>
         <Link to="/routing" className="nav-link">Routing/Auth</Link>
      </Nav>
    </Navbar.Collapse>
</Navbar>
  );
}
