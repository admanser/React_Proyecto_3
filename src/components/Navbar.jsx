import React, {useState} from "react";
import { Navbar, Container, Nav, Form, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Login from "./Login";
import Registro from "./Registro";

const Navbar1 = () => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);


  let activeStyle = {
    fontWeight: "bold",
  };
  return (
  <> 
    <Navbar id="nav" expand="lg" style={{ backgroundColor: "#FAA916" }} className="fixed-top col-12">
      <Container fluid className="col-12 col-md-12">
        <NavLink className="me-3" to="/">
          <img src="/img/icons/logo.png" alt="logo.png" width={50} />
        </NavLink>
        <Form className="d-flex h-25 pt-2">
          <Form.Control type="search" placeholder="Ingrese su búsqueda" className="me-2" aria-label="Search"/>
          <Button variant="outline-dark">buscar</Button>
        </Form>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0">
            <Button className="mt-1" type="submit" onClick={handleShow2}>Registrarse</Button>
            <Nav.Link className="mt-1" type="submit" onClick={handleShow}>Ingresar</Nav.Link>
            <NavLink
              className="nav-link mt-1"
              to="/Contact"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}>
              Contacto
            </NavLink>
            <NavLink
              className="nav-link mt-1 me-4"
              to="/Favorites"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}>
              Favoritos
            </NavLink>

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
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Login show={show} handleClose={handleClose}/>
    <Registro show2={show2} handleClose2={handleClose2}/>
  </>
  );
};
export default Navbar1;
