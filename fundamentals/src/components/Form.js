import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const PracticeForm = () => {
  const [sentForm, setSentForm] = useState(false);

  return (
    <>
      <Formik
        initialValues={{
          name: "",
          email: "",
        }}
        validate={(values) => {
          let err = {};

          if (!values.name) {
            err.name = "Please enter a name";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.name)) {
            err.name = "Name can only contain letters and numbers";
          }

          if (!values.email) {
            err.email = "Please enter a email";
          } else if (
            !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
              values.email
            )
          ) {
            err.email = "Email can only contain letters, numbers, ., - y _";
          }
          return err;
        }}
        onSubmit={(values, { resetForm }) => {
          console.log(values);
          setSentForm(true);
          resetForm();
          setTimeout(() => setSentForm(false), 3000);
        }}
      >
        {({
          values,
          handleSubmit,
          handleChange,
          handleBlur,
          touched,
          errors,
        }) => (
          <Form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name</label>
              <Field
                type="text"
                id="name"
                name="name"
                placeholder="John Doe"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <ErrorMessage
                name="name"
                component={() => <div>{errors.name}</div>}
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <Field
                type="email"
                id="email"
                name="email"
                placeholder="correo@correa.com"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <ErrorMessage
                name="email"
                component={() => <div>{errors.email}</div>}
              />
            </div>
            <button type="submit">Submit</button>
            {sentForm && <p style={{ color: "green" }}>Formulario enviado</p>}
          </Form>
        )}
      </Formik>
    </>
  );
};

export default PracticeForm;
