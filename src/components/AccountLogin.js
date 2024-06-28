import React, { useState, useEffect } from "react";
import "../styles/accountlogin.css";
import UserTypes from "./UserTypes";
import api from "../api";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/newCandidateApplyJob.css";

export default function AccountLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [loginMessage, setLoginMessage] = useState("");
  const [selectedUserType, setSelectedUserType] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const rememberedEmail = localStorage.getItem("rememberedEmail");
    const rememberedPassword = localStorage.getItem("rememberedPassword");
    const rememberedType = localStorage.getItem("rememberedType");

    if (rememberedEmail) setEmail(rememberedEmail);
    if (rememberedPassword) setPassword(rememberedPassword);
    if (rememberedType) setType(rememberedType);
  }, []);

  const handleLogin = async () => {
    if (email === "" || password === "") {
      setLoginMessage("Enter your email and password");
      return;
    }
    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setLoginMessage("Invalid email format");
      return;
    }

    // Password length validation
    if (password.length < 8) {
      setLoginMessage("Password must be at least 8 characters long");
      return;
    }

    if (selectedUserType === null) {
      setLoginMessage("User type not selected");
      return;
    }
    if (rememberMe) {
      localStorage.setItem("rememberedEmail", email);
      localStorage.setItem("rememberedPassword", password);
      localStorage.setItem("rememberedType", type);
    } else {
      localStorage.removeItem("rememberedEmail");
      localStorage.removeItem("rememberedPassword");
      localStorage.removeItem("rememberedType");
    }

    try {
      const response = await api.post("/login", {
        email: email,
        password: password,
        type: type,
      });
      console.log("API Response:", response.data);
      if (response.data.type !== selectedUserType) {
        setLoginMessage("Invalid user type");
        return;
      }
      const jwtToken = response.data.access_token;
      const refreshToken = response.data.refresh_token;
      localStorage.setItem("token", jwtToken);
      localStorage.setItem("refresh_token", refreshToken);

      // Get User Type to Front End
      const userType = response.data.type;
      localStorage.setItem("userType", userType);

      // Get User Name to Front End
      const useremail = response.data.email;
      localStorage.setItem("useremail", useremail);
      console.log("useremail:", useremail);

      setLoginMessage("Successfully logged in");

      if (userType === "Employee" || userType === "Manager") {
        navigate("/time and reporting");
      } else if (userType === "HR") {
        navigate("/Time Reporting/Employees");
      }
    } catch (error) {
      if (error.response) {
        console.error("Login Error:", error.response.data.detail);
        setLoginMessage("Invalid username or password");
      } else if (error.request) {
        console.error("Network Error:", error.request);
        console.log("Request Data:", error.request._data);
        console.log("Response Data:", error.request._response);
        setLoginMessage("Network error occurred");
      } else {
        console.error("Error:", error.message);
        setLoginMessage("An error occurred");
      }
    }
  };

  const handleSelectType = (type) => {
    setSelectedUserType(type);
  };

  return (
    <div className="right-container">
      <div className="container-login">
        <div className="header-login">
          <h1 className="header-H1">Account Login</h1>
          <p className="header-paragraph-login">
            If you are already a member you can login with your email address
            and password
          </p>
        </div>

        <div className="login-colms">
          <p className="paragraph-login">User types</p>
          <div className="user">
            <UserTypes
              userType="HR"
              onSelectType={handleSelectType}
              selectedUserType={selectedUserType}
              setSelectedUserType={setSelectedUserType}
              onChange={(e) => setType(e.target.value)}
            />
            <UserTypes
              userType="Manager"
              onSelectType={handleSelectType}
              selectedUserType={selectedUserType}
              setSelectedUserType={setSelectedUserType}
              onChange={(e) => setType(e.target.value)}
            />
            <UserTypes
              userType="Employee"
              onSelectType={handleSelectType}
              selectedUserType={selectedUserType}
              setSelectedUserType={setSelectedUserType}
              onChange={(e) => setType(e.target.value)}
            />
          </div>
        </div>

        <div className="login-colms">
          <p className="paragraph-login">Email address</p>
          <input
            type="email"
            placeholder="Email"
            className="box-login"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="login-colms">
          <p className="paragraph-login">Password</p>
          <input
            type="password"
            placeholder="Password"
            className="box-login"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="hide-message">{loginMessage}</p>
        </div>

        <div className="remember-icon">
          <div className="checkbox-raw">
            <input
              type="checkbox"
              id="myCheckbox"
              className="custom-checkbox"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
            />
            <label htmlFor="myCheckbox" className="custom-label"></label>
            <p className="paragraph-login">Remember me</p>
          </div>
        </div>

        <div className="login-colms my-4">
          <button className="login-box" onClick={handleLogin}>
            Log in
          </button>
        </div>
      </div>
    </div>
  );
}
