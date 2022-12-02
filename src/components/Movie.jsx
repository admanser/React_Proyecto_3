import React from 'react';
import {Card, Col, Row} from 'react-bootstrap/';
import { Link } from 'react-router-dom';

const Movie = ({ d }) => {
  return (
    <Col className="g-4">
        <Card className='p-0 h-100'>
            <Card.Img className="top image-movie" src={d.image} />
                <Card.Body>
                    <Card.Title className='movie-title'>
                      {d.title}
                    </Card.Title>
                </Card.Body>
                <Card.Footer className='p-1'>
                  <Row>
                    <Col>
                      <i className="fa-solid fa-star"></i>
                      <span className="p-1">1</span>
                    </Col>
                    <Col>
                      <Link to="/">  
                        <div className='d-flex justify-content-end movie-title'>
                          <Link style={{ backgroundColor: "#FAA916"}} className="btn" to={`/movie/${d.id}`}>Ver más</Link>
                        </div> 
                            </Link>
                        </Col>
                    </Row>
                </Card.Footer>
        </Card>
    </Col>
  );
};

export default Movie;