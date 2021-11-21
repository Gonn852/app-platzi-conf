import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';
import '../styles/components/Header.css'
import {Navbar, Container, Nav} from 'react-bootstrap'

const Header = () => {
    const {state} = useContext(AppContext);
    const {cart} = state;
    return (
        <Navbar sticky="top" className="bg-warning text-black">
            <Container>
            <Navbar.Brand className="link-header">
                <i class="fas fa-laptop"></i>{' '}Commerce
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link><Link className="link-buy" to="/">Products</Link></Nav.Link>
                </Nav>
                <Nav>
                <Nav.Link>
                    <Link className="link-buy" to="/checkout"><i className="shopping fas fa-shopping-basket"></i></Link>
                    {' '}
                    {cart.length > 0 && <span className="buy-length">{cart.length}</span>}
                </Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>   
    )
}

export default Header;