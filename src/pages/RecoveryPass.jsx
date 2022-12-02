import { Form, Formik } from "formik";
import { recoverySchema } from "../schemas";
import CustomEmail from "../components/CustomEmail";
import CustomInput from "../components/CustomInput";

const onSubmit = async (values, actions) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

const RecoveryPass = () => {
  return (
    <Formik
      initialValues={{ username: "", email: "" }}
      validationSchema={recoverySchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting, resetForm }) => (
        <Form>
          <h2>Recuperar Contraseña</h2>
          <CustomInput
            label="Username"
            name="username"
            type="text"
            placeholder="Bruno Díaz"
          />
          <CustomEmail
            label="Email"
            name="email"
            type="text"
            placeholder="mail@mail.com"
          />
          <div direction="horizontal" gap={3}>
            <button
              id="btncancel"
              type="reset"
              variant="secondary"
              onClick={resetForm}
            >
              Cancelar
            </button>

            <button id="btnsubmit" disabled={isSubmitting} type="submit">
              Submit
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};
export default RecoveryPass;
