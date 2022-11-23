import React from 'react';
import {Button, Modal, Form} from 'react-bootstrap';
import { Link } from 'react-router-dom';


const SignUp = ({show, handleClose}) => {


    return (
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>...</Modal.Title>
        </Modal.Header>
        <Modal.Body> 
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>...</Form.Label>
              <Form.Control type="email" placeholder="Ingrese su Email" />
              <Form.Text className="text-muted">
               
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>...</Form.Label>
              <Form.Control type="password" placeholder="Ingrese su contraseña" />
            </Form.Group>
            <Form.Text>
              Olvidó su contraseña? <Link to="/RecupPass">Recuperar</Link>
            </Form.Text>
            <br/>
            <Form.Text>
              Todavia no tienes cuenta? Que esperas para registrarte!
            </Form.Text>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Aceptar
          </Button>
          </Modal.Footer>
        </Modal>
    );
  }
;

export default SignUp;