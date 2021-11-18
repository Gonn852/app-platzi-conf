import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';

import {Navbar, Container, Nav} from 'react-bootstrap'

const Header = () => {
    const {state} = useContext(AppContext);
    const {cart} = state;
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand>
                <Link to="/">Quiroga Conf Merch</Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                </Nav>
                <Nav>
                <Nav.Link>
                    <Link to="/checkout"><i className="fas fa-shopping-basket"></i></Link>
                    {' '}
                    {cart.length > 0 && <>{cart.length}</>}
                </Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>   
    )
}

export default Header;