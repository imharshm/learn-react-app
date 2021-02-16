import React, { useState } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import History from "../utils/History";

const Header = () => {
  const handleClick = (e) => {
    History.push(e.target.attributes.getNamedItem("data-redirect").value);
  };

  return (
    <Navbar bg="dark" variant="dark">
      <Container className="px-3">
        <Navbar.Brand onClick={(e) => handleClick(e)} data-redirect="/">
          imharshm
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link onClick={(e) => handleClick(e)} data-redirect="/contact">
              Contact
            </Nav.Link>
            <Nav.Link onClick={(e) => handleClick(e)} data-redirect="/user-list">
              Users
            </Nav.Link>
            <NavDropdown title="Profile" id="basic-nav-dropdown">
              <NavDropdown.Item>View</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          {/* <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Header;
