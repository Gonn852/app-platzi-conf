import React from 'react';
import '../styles/components/Footer.css'
import {Navbar, Container, Nav} from 'react-bootstrap'

const Footer = () => {
    return(
        <>
        <Navbar className="footer-top" coland="lg" bg="dark" variant="dark">
            <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link>Platzi Conf Merch</Nav.Link>
                </Nav>
                <Nav>
                <Nav.Link>
                    Todos los Izquierdos Reservados
                </Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
    )
}

export default Footer;