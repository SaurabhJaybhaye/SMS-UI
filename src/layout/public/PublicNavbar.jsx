import React from "react";
import { useNavigate } from "react-router";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { PUBLIC_ROUTES, SCHOOL_NAME } from "../../utils/constants";

const PublicNavbar = () => {
  const navigate = useNavigate();
  const navItems = [
    { title: "Home", path: PUBLIC_ROUTES.HOME },
    { title: "About Us", path: PUBLIC_ROUTES.ABOUT_US },
    { title: "Register", path: PUBLIC_ROUTES.SIGNUP },
  ];
  return (
    <div id="PublicNavbar">
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand>
            {/* <img src={logo} alt="logo" className="logo" /> {COLLEGE_NAME} */}
            {SCHOOL_NAME}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {navItems.map((item) => {
                return (
                  <Nav.Link
                    className="link"
                    onClick={() => {
                      navigate(item.path);
                    }}
                    key={item.path}
                  >
                    {item.title}
                  </Nav.Link>
                );
              })}
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

export default PublicNavbar;
