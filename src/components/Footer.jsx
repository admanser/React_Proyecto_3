import React from "react";
import { NavLink } from "react-router-dom";

import { Row, Col, Container } from "react-bootstrap";

const Footer = () => {
  return (
    <Container fluid className="m-0">
      <Row className="d-flex" style={{ backgroundColor: "#FAA916" }}>
        <Col className="d-flex justify-content-center align-items-center">
          <img src="/img/logo.png" alt="logo.png" width={130} />
        </Col>
        <Col>
          <Row className=" g-3 mt-3">
            <a className="" href="">
              link1
            </a>
            <a className="" href="">
              link2
            </a>
            <a className="" href="">
              link3
            </a>
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
            <h3 className="col">
              <NavLink>
                <img
                  src="/img/icons/facebook.png"
                  alt="Icono Facebook"
                  width={45}
                />
              </NavLink>
            </h3>
            <h3 className="col">
              <NavLink>
                <img
                  src="/img/icons/instagram.png"
                  alt="Icono Instagram"
                  width={45}
                />
              </NavLink>
            </h3>
            <h3 className="col">
              <NavLink>
                <img
                  src="/img/icons/twitter.png"
                  alt="Icono Twitter"
                  width={45}
                />
              </NavLink>
            </h3>
            <h3 className="col">
              <NavLink>
                <img
                  src="/img/icons/youtube.png"
                  alt="Icono Youtube"
                  width={45}
                />
              </NavLink>
            </h3>
          </div>
        </Col>
      </Row>
      <Row>
        <h5 className="text-center bg-dark text-light py-2 m-0">
          {" "}
          © Copyright 2022 RollingCode Films - All Rights Reserved
        </h5>
      </Row>
    </Container>
  );
};
export default Footer;
