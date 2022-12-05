import React from "react";
import { Row, Container, Col } from "react-bootstrap";
import Ratio from "react-bootstrap/Ratio";
import NextPremieres from "./NextPremieres";

const MovieDetail = ({ data }) => {
  return (
    <Container fluid className="movie-detail">
      <h2 className="mt-4">{data.name}</h2>
      <hr></hr>
      <Row>
        <div>
          <Col>
            <div className="d-block justify-content-center text-center mt-2">
              <p>
                <b>Categoría</b>: {data.category}
              </p>
              <p>
                <b>Año:</b> {data.year}
              </p>
              <p>
                <b>Dirigida por:</b> {data.directedby}
              </p>
              <p>
                <b>Reparto:</b> {data.actors}
              </p>
            </div>
          </Col>
          <Col className="d-flex justify-content-center mb-3">
            <img src={data.image} alt="video"></img>
          </Col>
          <Col className="d-flex justify-content-center">
            <Ratio
              aspectRatio="16x9"
              className="movie-video d-flex justify-content-center"
            >
              <embed type="image/svg+xml" src={data.trailer} />
            </Ratio>
          </Col>
        </div>
      </Row>
      <h4 className="mt-5 text-center">Argumento</h4>
      <hr></hr>
      <p className="mb-5 text-center">{data.story}</p>
      <hr />
      <NextPremieres />
    </Container>
  );
};

export default MovieDetail;
