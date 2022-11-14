import React from 'react';
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Pagination from 'react-bootstrap/Pagination';
import { Link } from 'react-router-dom';

let active = 2;
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>,
  );
}

const ListFilms = () => {
  return (
    <Container className='mb-5'>
        <h2 className='mt-4'>CARTELERA</h2>
        <hr className='line-tittle'></hr>
        <p className='mb-5'>Browse our blog to discover a wealth of information about autism. It’s no secret that managing autism comes with challenges, but many of them can be overcome with some basic knowledge and ideas. Our blog is a valuable resource for new and experienced parents and teachers alike. Discover tips for having fun, methods for encouraging healthy development, insight into the science, and so much more! Be sure to check back often for the latest posts from fellow parents and experts in the field.</p>
        <Row xs={2} md={3} xl={5} className="g-5">
            <Col>
                <Card>
                    <Card.Img variant="top" src="../slider.png" />
                    <Card.Body>
                    <Card.Title>Titulo de pelicula</Card.Title>
                    </Card.Body>
                    <Card.Footer className='p-1'>
                        <Row>
                            <Col>
                                <i className="fa-solid fa-star"></i>
                                <span className="p-1">1</span>
                            </Col>
                            <Col>
                            <Link to="/checkout">  
                                <div  className='d-flex justify-content-end'>
                                    <p>Trailer</p>
                                </div> 
                            </Link>
                            </Col>
                        </Row>
                    </Card.Footer>
                </Card>
            </Col>
            <Col>
                <Card>
                    <Card.Img variant="top" src="../slider1.png" />
                    <Card.Body>
                    <Card.Title>Titulo de pelicula</Card.Title>
                    </Card.Body>
                    <Card.Footer className='p-1'>
                        <Row>
                            <Col>
                                <i className="fa-solid fa-star"></i>
                                <span>2</span>
                            </Col>
                            <Col>   
                                <div  className='d-flex justify-content-end'>
                                    <p>Trailer</p>
                                </div> 
                            </Col>
                        </Row>
                    </Card.Footer>
                </Card>
            </Col>
            <Col>
                <Card>
                    <Card.Img variant="top" src="../slider.png" />
                    <Card.Body>
                    <Card.Title>Titulo de pelicula</Card.Title>
                    </Card.Body>
                    <Card.Footer className='p-1'>
                        <Row>
                            <Col>
                                <i className="fa-solid fa-star"></i>
                                <span>2</span>
                            </Col>
                            <Col>   
                                <div  className='d-flex justify-content-end'>
                                    <p>Trailer</p>
                                </div> 
                            </Col>
                        </Row>
                    </Card.Footer>
                </Card>
            </Col>
            <Col>
                <Card>
                    <Card.Img variant="top" src="../slider1.png" />
                    <Card.Body>
                    <Card.Title>Titulo de pelicula</Card.Title>
                    </Card.Body>
                    <Card.Footer className='p-1'>
                        <Row>
                            <Col>
                                <i className="fa-solid fa-star"></i>
                                <span>2</span>
                            </Col>
                            <Col>   
                                <div  className='d-flex justify-content-end'>
                                    <p>Trailer</p>
                                </div> 
                            </Col>
                        </Row>
                    </Card.Footer>
                </Card>
            </Col>
            <Col>
                <Card>
                    <Card.Img variant="top" src="../slider.png" />
                    <Card.Body>
                    <Card.Title>Titulo de pelicula</Card.Title>
                    </Card.Body>
                    <Card.Footer className='p-1'>
                        <Row>
                            <Col>
                                <i className="fa-solid fa-star"></i>
                                <span>2</span>
                            </Col>
                            <Col>   
                                <div  className='d-flex justify-content-end'>
                                    <p>Trailer</p>
                                </div> 
                            </Col>
                        </Row>
                    </Card.Footer>
                </Card>
            </Col>
            <Col>
                <Card>
                    <Card.Img variant="top" src="../slider1.png" />
                    <Card.Body>
                    <Card.Title>Titulo de pelicula</Card.Title>
                    </Card.Body>
                    <Card.Footer className='p-1'>
                        <Row>
                            <Col>
                                <i className="fa-solid fa-star"></i>
                                <span>2</span>
                            </Col>
                            <Col>  
                                <div className='d-flex justify-content-end'>
                                    <p>Trailer</p>
                                </div> 
                            </Col>
                        </Row>
                    </Card.Footer>
                </Card>
            </Col>  
        </Row>
        <div className='d-flex justify-content-center mt-4'>
            <Pagination>{items}</Pagination>
            <br />
        </div>
    </Container>
  )
}

export default ListFilms