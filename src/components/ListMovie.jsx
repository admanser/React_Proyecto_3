import React from "react";
import { Container, Pagination, Row, Col } from "react-bootstrap";

import Movie from "./Movie";
import Publicity from "./Publicity"
//import Col from 'react-bootstrap/Col';

let active = 2;
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>
  );
}

const ListMovie = (props) => {
  return (
    <Container className="mb-5">
      <h1 className="mt-4 text-center">CARTELERA</h1>
      <hr></hr>
      <p className="mb-5"> Mira nuestra nueva cartelera, las mejores películas están en nuestro blog. </p>
      <Col className="d-flex mt-0 col-12"> 
        <Row xs={2} md={3} xl={5} className="g-5 mt-0 col-9">
              {props.data.map((d, i) => (
          <Movie d={d} key={"Movie" + i} /> ))}
            <div className="d-flex justify-content-center mt-4">
              <Pagination>{items}</Pagination>
              <br />
            </div>
        </Row>    
        <Row className="col-2 ms-3 d-none d-md-block  mt-4"><Publicity/>
        </Row>
      </Col> 
    </Container>
  );
};

export default ListMovie;
