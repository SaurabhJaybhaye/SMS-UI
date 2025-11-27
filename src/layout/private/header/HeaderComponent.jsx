import React from "react";
import { useNavigate } from "react-router";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import {
  LOCAL_STORAGE_KEYS,
  PRIVATE_ROUTES,
  PUBLIC_ROUTES,
  SCHOOL_NAME,
} from "../../../utils/constants";

const HeaderComponent = () => {
  const navigate = useNavigate();
  const navItems = [
    { title: "Dashboard", path: PRIVATE_ROUTES.DASHBOARD },
    { title: "Students", path: PRIVATE_ROUTES.STUDENTS },
    { title: "Settings", path: PRIVATE_ROUTES.SETTINGS },
  ];

  const handleLogout = () => {
    localStorage.removeItem(LOCAL_STORAGE_KEYS.LOGGED_IN_USER);
    navigate(PUBLIC_ROUTES.LOGIN);
  };

  return (
    <div id="HeaderComponent">
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
              <Nav.Link className="link" onClick={handleLogout}>
                Logout
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default HeaderComponent;
