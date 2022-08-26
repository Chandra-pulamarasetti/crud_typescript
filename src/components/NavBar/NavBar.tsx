import "./style.css";
import React from "react";
import { Link } from "react-router-dom";
import { Button, Container } from "react-bootstrap";

const NavBar: React.FC = () => {
  return (
    <Container className="navbar d-flex justify-content-space-between mb-5">
      <h1 className="display-6 ms-2">My Posts</h1>
      <Link to="/create">
        <Button variant="success me-2">Create Post</Button>
      </Link>
    </Container>
  );
};

export default NavBar;
