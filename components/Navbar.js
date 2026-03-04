"use client";

import { Navbar, Container, Nav } from "react-bootstrap";

export default function SiteNavbar() {
    return (
        <Navbar expand="lg" variant="dark" bg="dark" sticky="top">
            <Container>
                <Navbar.Brand href="/">Client Business Name</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                        <Nav.Link href="/services">Services</Nav.Link>
                        <Nav.Link href="/contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
