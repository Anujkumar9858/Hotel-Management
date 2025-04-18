import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./nav.css"
import Our_service from "./Our_service";


 export default function Header() {
    return(

        <div className="header">
        <Navbar expand="lg" className="Main">
      <Container>
        <Navbar.Brand  className="logo" >HOTELIER</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navbar">
            <Nav.Link href="#home" id="first">Home</Nav.Link>
            <Nav.Link href="#link" id="first">About</Nav.Link>
            <Nav.Link href= "#first" id="first">Services</Nav.Link>
            <Nav.Link href="#link" id="first">Rooms</Nav.Link>
            <NavDropdown title="Pages" id="first">
              <NavDropdown.Item href="#action/3.1">Booking</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Our Team
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Testimonial</NavDropdown.Item>
              {/* <NavDropdown.Divider /> */}
              {/* <NavDropdown.Item href="#action/3.4">
              Testimonial
              </NavDropdown.Item> */}
            </NavDropdown>
            <Nav.Link href="#link" id="second">Contact</Nav.Link>
            <Nav.Link href="#link" id="third">PREMIUM VERSION <i class="fa-sharp fa-solid fa-arrow-right"></i> </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    )
    
}