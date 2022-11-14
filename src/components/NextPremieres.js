import React from 'react';
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const NextPremieres = () => {
  return (
    <Container className='mb-5'>
        <h2 className='mt-4'>PRÓXIMOS ESTRENOS</h2>
        <hr className='line-tittle'></hr>
        <Row xs={2} md={3} xl={5} className="g-5">
            <Col>
                <Card>
                    <Card.Img variant="top" src="../slider.png" />
                    <Card.Body>
                    <Card.Title>Titulo de pelicula</Card.Title>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card>
                    <Card.Img variant="top" src="../slider1.png" />
                    <Card.Body>
                    <Card.Title>Titulo de pelicula</Card.Title>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card>
                    <Card.Img variant="top" src="../slider.png" />
                    <Card.Body>
                    <Card.Title>Titulo de pelicula</Card.Title>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card>
                    <Card.Img variant="top" src="../slider.png" />
                    <Card.Body>
                    <Card.Title>Titulo de pelicula</Card.Title>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
  )
}

export default NextPremieres