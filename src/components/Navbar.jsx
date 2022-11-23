import React, {useState} from "react";
import { Navbar, Container, Nav, Form, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";

const Navbar1 = () => {

  const [showLogin, setShowLogin] = useState(false);
  const handleCloseLogin = () => setShowLogin(false);
  const handleShowLogin = () => setShowLogin(true);

  const [showSignUp, setShowSignUp] = useState(false);
  const handleCloseSignUp = () => setShowSignUp(false);
  const handleShowSignUp = () => setShowSignUp(true);


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
            <Nav.Link className="mt-1" onClick={handleShowSignUp}>Registrarse</Nav.Link>
            <Nav.Link className="mt-1" onClick={handleShowLogin}>Ingresar</Nav.Link>
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
    <Login handleShowSignUp={handleShowSignUp} show={showLogin} handleClose={handleCloseLogin}/>
    <SignUp  show={showSignUp} handleClose={handleCloseSignUp}/>
  </>
  );
};
export default Navbar1;
