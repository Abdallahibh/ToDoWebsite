import React from "react";
import LoginForm from "../Components/Auth/LoginForm";

const LoginPage = ({ setIsAuthenticated }) => {
  return (
    <div>
      <LoginForm setIsAuthenticated={setIsAuthenticated} />
    </div>
  );
};

export default LoginPage;
