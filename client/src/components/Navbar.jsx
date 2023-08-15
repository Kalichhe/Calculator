import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../style/Navbar.css"

function Navbars() {
  const { isAuthenticated, logout, user } = useAuth();

  return (
    <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="bg-body-tertiary">
      {isAuthenticated ? (
        <>
          <Container className="container">
            <h1 className="welcomeUser">Welcome {user.username}</h1>
            <Nav.Link className="logout"
              onClick={() => {
                logout();
              }}
            >
              Logout
            </Nav.Link>
          </Container>
        </>
      ) : (
        <Container>
          <Navbar.Brand href="/">Calculator</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic_navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/login">Login</Nav.Link>
              <Nav.Link href="/register">Register</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      )}
    </Navbar>
  );
}

export default Navbars;
