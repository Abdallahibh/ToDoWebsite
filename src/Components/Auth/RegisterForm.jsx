import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../assets/styles/AuthForm.css";

const RegisterForm = () => {
  const navigate = useNavigate();

  const initialValues = {
    username: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string()
      .matches(/^[A-Za-z]+$/, "Username must contain only letters")
      .min(3, "username must be at least 3 characters")
      .required("Required"),
    password: Yup.string()
      .required("Required")
      .min(6, "Password must be at least 6 characters"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Required"),
  });

  const onSubmit = async (values) => {
    try {
      await axios.post("http://localhost:5000/users", {
        username: values.username,
        password: values.password,
      });
      navigate("/login");
    } catch (error) {
      console.error("Error registering:", error);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form className="auth-form">
        <div>
          <h1 className="heading">Register</h1>
          <label htmlFor="username">Username</label>
          <Field type="text" id="username" name="username" />
          <ErrorMessage name="username" component="div" className="error" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <Field type="password" id="password" name="password" />
          <ErrorMessage name="password" component="div" className="error" />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <Field type="password" id="confirmPassword" name="confirmPassword" />
          <ErrorMessage
            name="confirmPassword"
            component="div"
            className="error"
          />
        </div>
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
};

export default RegisterForm;
