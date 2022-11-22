import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
// import { Formik } from "formik";
import { Formik, Form, Field, ErrorMessage } from "formik";

const UserReg = ({ show, handleClose }) => {
  const [sentform, setsentform] = useState(false);

  return (
    <>
      <Formik
        initialValues={{
          name: "",
          email: "",
        }}
        validate={(values) => {
          let mistakes = {};

          // Validacion name
          if (!values.name) {
            mistakes.name = "Por favor ingresa un nombre de Usuario";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.name)) {
            mistakes.name = "El usuario solo puede contener letras y espacios";
          }

          // Validacion email
          if (!values.email) {
            mistakes.email = "Por favor ingresa un correo electronico";
          } else if (
            !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
              values.email
            )
          ) {
            mistakes.email =
              "El correo solo puede contener letras, numeros, puntos, guiones y guion bajo.";
          }

          return mistakes;
        }}
        onSubmit={(values, { resetForm }) => {
          resetForm();
          console.log("Formulario enviado");
          setsentform(true);
          setTimeout(() => setsentform(false), 5000);
        }}
      >
        {({ errors, resetForm }) => (
          <Modal
            size="lg"
            show={show}
            onHide={handleClose}
            // backdrop="static"
            // keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title className="fw-bold">
                Registro de Usuarios
              </Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <Form className="formulario">
                <div>
                  <label htmlFor="name">Nombre de Usuario</label>
                  <Field
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Ingrese un nombre de Usuario"
                  />
                  <ErrorMessage
                    name="name"
                    component={() => <div className="error">{errors.name}</div>}
                  />
                </div>
                <div>
                  <label htmlFor="email">Email</label>
                  <Field
                    type="text"
                    id="email"
                    name="email"
                    placeholder="email@email.com"
                  />
                  <ErrorMessage
                    name="email"
                    component={() => (
                      <div className="error">{errors.email}</div>
                    )}
                  />
                </div>
              </Form>
            </Modal.Body>

            <Modal.Footer>
              <Button className="btn-cerrar" variant="" onClick={handleClose}>
                Cerrar
              </Button>
              <Button className="btn-registrar" variant="">
                Registrar
              </Button>

              {sentform && (
                <p className="exito">Formulario enviado con exito!</p>
              )}
            </Modal.Footer>
          </Modal>
        )}
      </Formik>
    </>
  );
};

export default UserReg;
