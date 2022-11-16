import React from "react";
import { FaFacebook, FaTwitterSquare, FaLinkedin,FaInstagram} from "react-icons/fa";
import {Row, Col, Container} from 'react-bootstrap'


const Footer = () => {
  return (
  <Container fluid className="m-0"  >
    <Row className="d-flex" style={{ backgroundColor: "#FAA916" }}>
      <Col className="d-flex justify-content-center align-items-center"><img src="https://trello.com/1/cards/6369ac671b9582011c590418/attachments/6372a44304ff6d018d083864/download/Negro_Blanco_Iconos_Moderno_Festival_de_Cine_Evento_Logotipo_(6).png" alt="Logo" width={130}/></Col>
      <Col>
        <Row className=" g-3 mt-3">
          <a className="" href="">link1</a>
          <a className="" href="">link2</a>
          <a className="" href="">link3</a>
        </Row>
      </Col>
      <Col>
        <Row className=" g-3 mt-3 ">
          <a href="">link4</a>
          <a href="">link5</a>
          <a href="">link6</a>
        </Row>  
      </Col>
      <Col>
        <div className="d-flex mt-5"> 
          <h3 className="col"><FaFacebook /></h3>
          <h3 className="col"><FaInstagram /></h3>
          <h3 className="col"><FaLinkedin /></h3>
          <h3 className="col"><FaTwitterSquare/></h3>
        </div>
      </Col>
    </Row>
    <Row>
      <h5 className="text-center bg-dark text-light py-2 m-0"> © Copyright 2022 RollingCode Films - All Rights Reserved</h5>
    </Row>
  </Container>
  )
};
;
export default Footer;
