import React from "react";
import { Navbar } from "react-bootstrap";
import History from "../utils/History";

const Header = () => {
  const handleClick = () => {
    History.push("/");
  };

  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand onClick={handleClick}>imharshm</Navbar.Brand>
    </Navbar>
  );
};
export default Header;
