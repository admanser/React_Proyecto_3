import React from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import Ratio from 'react-bootstrap/Ratio';
import NextPremieres from './NextPremieres';

const MovieDetail = () => {
  return (
    <Container>
        <h2 className='mt-2'>Nombre Pelicula</h2>
        <hr></hr>
        <Row>
          <div className="width-col">
              <Col  className="d-flex justify-content-start">
                <img src="./img/premiere1.jpg"></img></Col>
              <Col>
                <div className='d-block justify-content-start mt-2'>
                  <p>Categoría:</p>
                  <p>Año:</p>
                  <p>Dirigida por:</p>
                  <p>Reparto:</p>
                </div>
              </Col>
              <Col>
                <Ratio aspectRatio="16x9">
                  <embed type="image/svg+xml" src="https://www.youtube.com/embed/watch?v=Sm6_rlrIKXw" />
                </Ratio>
              </Col>
            </div>
        </Row>
        <h4 className='mt-5'>Argumento</h4>
        <hr></hr>
        <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium possimus temporibus suscipit odit! Error veritatis, minus voluptatem possimus maiores soluta quis, voluptate minima itaque delectus expedita deserunt atque quidem fuga quasi iste nemo numquam ratione accusamus ut asperiores provident maxime nesciunt hic? Perspiciatis a in officiis tempora adipisci molestiae nesciunt.</p>
        <NextPremieres />
    </Container>
  );
};

export default MovieDetail;