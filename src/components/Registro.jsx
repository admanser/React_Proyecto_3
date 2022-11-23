import React from 'react';
import {Button, Modal, Form} from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Registro = ({show, handleClose2}) => {


    return (
      <Modal show={show} onHide2={handleClose2}>
        <Modal.Header closeButton>
          <Modal.Title>Iniciar sesión</Modal.Title>
        </Modal.Header>
        <Modal.Body> 
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Ingrese su Email" />
              <Form.Text className="text-muted">
                Por favor ingrese su email correctamente.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
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
          <Button variant="secondary" onClick={handleClose2}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleClose2}>
            Aceptar
          </Button>
          </Modal.Footer>
        </Modal>
    );
  }
;

export default Registro;