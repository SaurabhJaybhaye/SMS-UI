import React, { useState, useEffect } from "react";
import "./LoginPage.css";
import { useNavigate } from "react-router";
import { PRIVATE_ROUTES, PUBLIC_ROUTES } from "../../../utils/constants";

const LoginPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    showPassword: false,
  });

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login attempted with", formData);
    const users = JSON.parse(localStorage.getItem("registeredUser")) || [];
    if (users.length <= 0) {
      alert("No registered users found. Please register first.");
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
                      <div className="form-floating mb-3">
                        <input
                          type="email"
                          className="form-control"
                          id="floatingInput"
                          placeholder="name@example.com"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required={true}
                        />
                        <label htmlFor="floatingInput">Email address</label>
                      </div>
                      <div className="form-floating mb-3">
                        <input
                          type={formData.showPassword ? "text" : "password"}
                          className="form-control"
                          id="floatingPassword"
                          placeholder="Password"
                          name="password"
                          value={formData.password}
                          onChange={handleChange}
                          required
                        />
                        <label htmlFor="floatingPassword">Password</label>
                      </div>

                      <div className="form-check mb-3">
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
