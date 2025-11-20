import React, { useState, useEffect } from "react";
import "./LoginPage.css";
import { useNavigate } from "react-router";
import { PRIVATE_ROUTES, PUBLIC_ROUTES } from "../../../utils/constants";
import InputComponent from "../../../components/input/InputComponent";

const LoginPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    showPassword: false,
  });
  const [errorMessage, setErrorMessage] = useState({
    email: null,
    password: null,
  });

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
    setErrorMessage(null);
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (value.trim() === "") {
      setErrorMessage((prev) => {
        return { ...prev, [name]: `${name} is required` };
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.email.trim() === "" || formData.password.trim() === "") {
      setErrorMessage({
        email: formData.email.trim() === "" ? "Email is required" : null,
        password:
          formData.password.trim() === "" ? "Password is required" : null,
      });
      return;
    }
    const users = JSON.parse(localStorage.getItem("registeredUser")) || [];
    if (users.length <= 0) {
      alert("No users found. Please sign up first.");
      navigate(`/${PUBLIC_ROUTES.SIGNUP}`);
      return;
    }
    const userData = users.find(
      (user) =>
        user.email === formData.email && user.password === formData.password
    );
    if (userData) {
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ ...userData, isLoggedIn: true })
      );
      alert("Login successful");
      navigate(`/${PRIVATE_ROUTES.DASHBOARD}`);
    } else {
      alert("Invalid credentials");
    }
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("loggedInUser"));
    if (user && user.isLoggedIn) {
      navigate(`/${PRIVATE_ROUTES.DASHBOARD}`);
      return;
    }
  }, [navigate]);

  return (
    <div id="login">
      <div className="container-fluid ps-md-0">
        <div className="row g-0">
          <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
          <div className="col-md-8 col-lg-6">
            <div className="login d-flex align-items-center py-5">
              <div className="container">
                <div className="row">
                  <div className="col-md-9 col-lg-8 mx-auto">
                    <h3 className="login-heading mb-4">Welcome back!</h3>

                    <form onSubmit={handleSubmit}>
                      <InputComponent
                        type="email"
                        placeholder="Email"
                        handleChange={handleChange}
                        onBlur={handleBlur}
                        name="email"
                        value={formData?.email}
                        errorMessage={errorMessage?.email}
                        label="Email address"
                      />
                      <InputComponent
                        type={formData?.showPassword ? "text" : "password"}
                        placeholder="Password"
                        handleChange={handleChange}
                        onBlur={handleBlur}
                        name="password"
                        value={formData?.password}
                        errorMessage={errorMessage?.password}
                        label="Password"
                      />

                      <div className="form-check mt-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="rememberPasswordCheck"
                          name="showPassword"
                          onChange={handleChange}
                          checked={formData.showPassword}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="rememberPasswordCheck"
                        >
                          Show password
                        </label>
                      </div>

                      <div className="d-grid">
                        <button
                          className="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2"
                          type="submit"
                        >
                          Sign in
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
