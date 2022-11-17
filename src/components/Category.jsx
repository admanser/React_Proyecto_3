import React from 'react';
import { Col, Container, Row, Card } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import Ratio from 'react-bootstrap/Ratio';

const Category = () => {
  return (
    <Container className='mb-5'>
         <h2 className='mt-2'>BÚSQUEDA</h2>
         <hr></hr>
        <Row className='mb-5'>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Categorías
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Comedias</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Acción</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Drama</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Ciencia Ficción</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </Row>
         <Row xs={1} md={2} className="g-5">
            <Col>
                <Row>
                    <Col className="mb-4 d-flex justify-content-center">
                        <Card style={{ width: '15rem' }}>
                            <Card.Img variant="top" src="./img/slider1.jpg" />
                            <Card.Body>
                                <Card.Title>Comedias</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="mb-4 d-flex justify-content-center">
                        <Card style={{ width: '15rem' }}>
                            <Card.Img variant="top" src="./img/slider2.jpg" />
                            <Card.Body>
                                <Card.Title>Acción</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="mb-4 d-flex justify-content-center">
                        <Card style={{ width: '15rem' }}>
                            <Card.Img variant="top" src="./img/slider3.jpg" />
                            <Card.Body>
                                <Card.Title>Drama</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="mb-4 d-flex justify-content-center">
                        <Card style={{ width: '15rem' }}>
                            <Card.Img variant="top" src="./img/slider1.jpg" />
                            <Card.Body>
                                <Card.Title>Ciencia Ficción</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Col>
            <Col>
                <Card>
                    <div style={{ width: 'auto', height: 'auto' }} className="d-none d-md-block">
                        <Ratio aspectRatio="16x9">
                            <embed type="image/svg+xml" src="https://www.youtube.com/embed/D30r0CwtIKc" />
                        </Ratio>
                     </div>
                    <Card.Body className="d-none d-md-block p-2">
                        <Card.Img variant="top" src="./img/publicity.jpg" />
                    </Card.Body>
                </Card>
            </Col>
         </Row>
    </Container>
  );
};

export default Category;