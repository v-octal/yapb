import React from "react"
import { Navbar, Nav } from "react-bootstrap"
import { Link } from "gatsby"

import "./navbar.css"

const CustomNavbar = () => (
  <Navbar collapseOnSelect expand="lg" fixed="top" variant="light" className="yapb-navbar">
    <Link to="/" className="yapb-navbar-element">React-Bootstrap</Link>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto"></Nav>
      <Nav>
        <Link to="/blog/" className="yapb-navbar-element">Blog</Link>
        <Link to="/project/" className="yapb-navbar-element">Project</Link>
        <Link to="/review/" className="yapb-navbar-element">Review</Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default CustomNavbar
