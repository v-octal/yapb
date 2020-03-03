import React from "react"
import { Navbar, Nav } from "react-bootstrap"
import "./navbar.css"

const CustomNavbar = () => (
  <Navbar collapseOnSelect expand="lg" fixed="top" variant="light" className="custom-navbar-formatting">
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto"></Nav>
      <Nav>
        <Nav.Link href="#">Articles</Nav.Link>
        <Nav.Link href="#">Projects</Nav.Link>
        <Nav.Link href="#">Books</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default CustomNavbar
