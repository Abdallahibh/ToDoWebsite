import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../assets/styles/Header.css";

const Header = ({ isAuthenticated, setIsAuthenticated }) => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setUserName(user.username);
    }
  }, [isAuthenticated]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsAuthenticated(false);
    navigate("/");
  };

  return (
    <header>
      <div className="navbar">
        <Link to="/">
          <div className="logo">
            <button className="sizelogo">Todist</button>
          </div>
        </Link>
        <ul className="links">
          <li>
            <Link to="/">
              <i className="fa-solid fa-house"></i>&nbsp;Home
            </Link>
          </li>
          <li>
            <Link to="/about">
              <i className="fa-regular fa-address-card"></i>&nbsp;About
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <i className="fa-solid fa-phone"></i>&nbsp;Contact Us
            </Link>
          </li>
        </ul>
        <div className="buttonLR">
          {isAuthenticated ? (
            <div className="user-info">
              <span>Hi, {userName}</span>
              <button onClick={handleLogout} className="action_btn">
                Logout
              </button>
            </div>
          ) : (
            <>
              <Link to="/login" className="action_btn">
                Login
              </Link>
              <Link to="/register" className="action_btn">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
