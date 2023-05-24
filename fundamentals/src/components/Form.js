import React from "react";
import { Formik } from "formik";

const Form = () => {
  return (
    <>
      <Formik
        initialValues={{
          name: "",
          email: "",
        }}
        validate={(values) => {
          let err = {};

          if(!values.name){
            err.name = "Please enter a name"
          }

          return err;
        }}
        onSubmit={(values) => {
          console.log(values)
          console.log("sent");
        }}
      >
        {({ values, handleSubmit, handleChange, handleBlur, errors }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="John Doe"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                />
                {errors.name && <div>{errors.name}</div>}
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="correo@correa.com"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                />
            </div>
            <button type="submit">Submit</button>
          </form>
        )}
      </Formik>
    </>
  );
};

export default Form;
