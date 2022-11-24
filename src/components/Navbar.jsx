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
      <Container className="col-12 col-md-12">
        <NavLink className="me-3" to="/">
          <img src="/img/icons/logo.png" alt="logo.png" width={50} />
        </NavLink>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0">
            <NavLink className="nav-link mt-1" to="/Contact">Contacto</NavLink>
            <NavLink className="nav-link mt-1 me-4" to="/Favorites">Favoritos</NavLink>
          </Nav>
          <Button className="mt-1 me-2" onClick={handleShowSignUp}>Registrarse</Button>
          <Button className="mt-1 me-2" onClick={handleShowLogin}>Iniciar sesión</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Login handleShowSignUp={handleShowSignUp} show={showLogin} handleClose={handleCloseLogin}/>
    <SignUp  show={showSignUp} handleClose={handleCloseSignUp}/>
  </>
  );
};
export default Navbar1;
