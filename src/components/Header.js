import React from "react";
import { Navbar, Container } from "react-bootstrap";
import History from "../utils/History";

const Header = () => {
  const handleClick = () => {
    History.push("/");
  };

  return (
    <Navbar bg="dark" variant="dark">
      <Container className="px-3">
        <Navbar.Brand onClick={handleClick}>imharshm</Navbar.Brand>
      </Container>
    </Navbar>
  );
};
export default Header;
