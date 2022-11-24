import React from "react";
import { Button, Modal } from "react-bootstrap";
import { Form, Formik } from "formik";
import { advancedSchema } from "../schemas";
import CustomRePass from "./CustomRePass";
import CustomInput from "./CustomInput";
import CustomPass from "./CustomPass";

const onSubmit = async (actions) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

const SignUp = ({ show, handleClose }) => {
  return (
    <Formik
      initialValues={{ username: "", password: "", confirmpass: "" }}
      validationSchema={advancedSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title className="text-dark fw-bold">
                Registro de Usuarios
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <CustomInput
                  label="Usuario"
                  name="username"
                  type="text"
                  placeholder="Ingrese un nombre de Usuario"
                />
                <CustomPass
                  label="Contraseña"
                  name="password"
                  type="password"
                  placeholder="Contraseña"
                />
                <CustomRePass
                  label="Confirmar Contraseña"
                  name="confirmpass"
                  type="password"
                  placeholder="Confirmar Contraseña"
                />
                {/* <button disabled={isSubmitting} type="submit" className="mt-5">
                  Submit
                </button> */}
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button type="submit" variant="primary" disabled={isSubmitting}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      )}
    </Formik>
  );
};
export default SignUp;
