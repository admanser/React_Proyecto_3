import React from 'react'
import { Navbar, Container, Nav, Form, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Navbar2 = () => {
  return (
    <div id="nav" expand="lg" className="navv">
    <Container  className="col-12-d-none col-md-block d-flex p-2">
      <Form className="d-flex h-25 pt-2 col-8 pe-4">
        <Form.Control type="search" placeholder="Ingrese su búsqueda" className="me-2" aria-label="Search"/>
        <Button variant="outline-dark">buscar</Button>
      </Form>
      <div/>
          <div className="row ms-auto">
              <a className="col" href="https://facebook.com">
                <img
                  src="/img/icons/facebook.png"
                  alt="Icono Facebook"
                  width={45}
                />
              </a>
              <a className="col" href="https://instagram.com">
                <img
                  src="/img/icons/instagram.png"
                  alt="Icono Instagram"
                  width={45}
                />
              </a>
              <a className="col" href="https://twitter.com">
                <img
                  src="/img/icons/twitter.png"
                  alt="Icono Twitter"
                  width={45}
                />
              </a>
              <a className="col" href="https://youtube.com">
                <img
                  src="/img/icons/youtube.png"
                  alt="Icono Youtube"
                  width={45}
                />
              </a>
          </div>
    </Container>
  </div>
  )
}

export default Navbar2