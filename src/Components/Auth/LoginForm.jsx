import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../assets/styles/AuthForm.css";

const LoginForm = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();

  const initialValues = {
    username: "",
    password: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
  });

  const onSubmit = async (values) => {
    try {
      const response = await axios.get("http://localhost:5000/users", {
        params: {
          username: values.username,
        },
      });

      const user = response.data.find(
        (user) => user.password === values.password
      );

      if (user) {
        localStorage.setItem("user", JSON.stringify(user));
        setIsAuthenticated(true);
        navigate("/tasks");
      } else {
        console.error("Login failed: Incorrect username or password");
        alert("Invalid username or password");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      alert("An error occurred during login");
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form className="auth-form">
        <h1 className="heading">Login</h1>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <Field
            type="text"
            id="username"
            name="username"
            className="form-field"
          />
          <ErrorMessage name="username" component="div" className="error" />
          <label htmlFor="password">Password</label>
          <Field
            type="password"
            id="password"
            name="password"
            className="form-field"
          />
          <ErrorMessage name="password" component="div" className="error" />
        </div>
        <button type="submit" className="submit-button">
          Login
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
