import React from "react"
import { Navbar, Nav } from "react-bootstrap"
import styled from "styled-components"

const StyledDiv = styled.div`
  margin: 50px;
`

const CustomNavbar = () => (
  <StyledDiv>
    <Navbar
      collapseOnSelect
      expand="lg"
      fixed="top"
      variant="light"
      style={{ backgroundColor: "white", paddingTop: "25px" }}
    >
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
  </StyledDiv>
)

export default CustomNavbar
