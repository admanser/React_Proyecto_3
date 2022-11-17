import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';

const Movie = ({ d }) => {
  return (
    <Card className='p-0'>
        <Card.Img className="top" src={d.image} />
            <Card.Body>
                <Card.Title className='movie-title'>{d.title}</Card.Title>
            </Card.Body>
            <Card.Footer className='p-1'>
                <Row>
                    <Col>
                        <i className="fa-solid fa-star"></i>
                        <span className="p-1">1</span>
                    </Col>
                    <Col>
                        <Link to="/checkout">  
                            <div className='d-flex justify-content-end movie-title'>
                                <p>Trailer</p>
                            </div> 
                        </Link>
                    </Col>
                </Row>
            </Card.Footer>
    </Card>
  );
};

export default Movie;