import React from 'react';
import '../styles/components/Footer.css'
import {Navbar, Container, Nav} from 'react-bootstrap'

const Footer = () => {
    return(
        <>
        <Navbar className="footer-top-bottom bg-warning">
            <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav link-footer" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    Platzi Conf Merch
                </Nav>
                <Nav>
                    Todos los Izquierdos Reservados
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
    )
}

export default Footer;