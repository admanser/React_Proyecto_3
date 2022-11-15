import React from "react";
import {Navbar, Container, Nav, Form, Button } from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import { FaFacebook, FaTwitterSquare, FaLinkedin,FaInstagram} from "react-icons/fa";

const Navbar1 = () => {
  let activeStyle={
    fontWeight:'bold'}
  return (
    <Navbar expand="lg" style={{ backgroundColor: "#FAA916" }} className="fixed-top">
      <Container fluid>
        <NavLink className ='me-3' to= "/"><img src="https://trello.com/1/cards/6369ac671b9582011c590418/attachments/6372a44304ff6d018d083864/download/Negro_Blanco_Iconos_Moderno_Festival_de_Cine_Evento_Logotipo_(6).png" width={45}/></NavLink>
          <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                <Form className="d-flex">
                  <Form.Control type="search" placeholder="Ingrese su búsqueda" className="me-2" aria-label="Search"/>
                  <Button variant="outline-dark">buscar</Button>
                </Form>
                <Nav.Link href="#action1">Registrarse</Nav.Link>
                <Nav.Link href="#action2">Ingresar</Nav.Link>
              </Nav>
              <div className="row"> 
                <h3 className="col"> <FaFacebook /></h3>
                <h3 className="col"> <FaInstagram /></h3>
                <h3 className="col"> <FaLinkedin /></h3>
                <h3 className="col"> <FaTwitterSquare/></h3>
              </div>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  );
}
export default Navbar1;
