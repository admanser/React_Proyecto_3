import React from "react";
import { Navbar, Container, Nav, Form, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Navbar1 = () => {
  let activeStyle = {
    fontWeight: "bold",
  };
  return (
    <Navbar
      expand="lg"
      style={{ backgroundColor: "#FAA916" }}
      className="fixed-top"
    >
      <Container fluid>
        <NavLink className="me-3" to="/">
          <img src="/img/icons/logo.png" alt="logo.png" width={50} />
        </NavLink>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0">
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Ingrese su búsqueda"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-dark">buscar</Button>
            </Form>
            <Nav.Link href="#action1">Registrarse</Nav.Link>
            <Nav.Link href="#action2">Ingresar</Nav.Link>

            <NavLink
              className="nav-link"
              to="/Contact"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Contacto
            </NavLink>
            <NavLink
              className="nav-link"
              to="/Favorites"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Favoritos
            </NavLink>
            {/* <Container fluid className="justify-content-end"> */}
            <div className="row">
              <h3 className="col">
                {" "}
                <a href="https://facebook.com">
                  <img
                    src="/img/icons/facebook.png"
                    alt="Icono Facebook"
                    width={45}
                  />
                </a>
              </h3>
              <h3 className="col">
                {" "}
                <a href="https://instagram.com">
                  <img
                    src="/img/icons/instagram.png"
                    alt="Icono Instagram"
                    width={45}
                  />
                </a>
              </h3>
              <h3 className="col">
                {" "}
                <a href="https://twitter.com">
                  <img
                    src="/img/icons/twitter.png"
                    alt="Icono Twitter"
                    width={45}
                  />
                </a>
              </h3>
              <h3 className="col">
                {" "}
                <a href="https://youtube.com">
                  <img
                    src="/img/icons/youtube.png"
                    alt="Icono Youtube"
                    width={45}
                  />
                </a>
              </h3>
            </div>
            {/* </Container> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Navbar1;
