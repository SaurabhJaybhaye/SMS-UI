import React from "react";
import { useNavigate } from "react-router";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

const HeaderComponent = () => {
  const navigate = useNavigate();
  return (
    <div id="HeaderComponent">
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand>
            {/* <img src={logo} alt="logo" className="logo" /> {COLLEGE_NAME} */}
            SMS
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                className="link"
                onClick={() => {
                  navigate("/");
                }}
              >
                Home
              </Nav.Link>
              <Nav.Link
                className="link"
                onClick={() => {
                  navigate("/about-us");
                }}
              >
                About Us
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link
                className="link"
                onClick={() => {
                  navigate("/login");
                }}
              >
                Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default HeaderComponent;
