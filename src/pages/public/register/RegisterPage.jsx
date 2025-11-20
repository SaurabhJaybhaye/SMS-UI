import React, { useState } from "react";
import { useNavigate } from "react-router";
import "../login/LoginPage.css";
import { PUBLIC_ROUTES } from "../../../utils/constants";

const RegisterPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registration attempted with", formData);
    if (formData.password !== formData.confirmPassword) {
      alert("password and confirm password do not match");
      return;
    }
    const oldUsers = JSON.parse(localStorage.getItem("registeredUser")) || [];
    const updatedUsers = [
      ...oldUsers,
      {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        role: "user",
      },
    ];
    localStorage.setItem("registeredUser", JSON.stringify(updatedUsers));
    alert("Registration successful");
    navigate(`/${PUBLIC_ROUTES.LOGIN}`);
  };

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
                    <h3 className="login-heading mb-4">Signup</h3>

                    <form onSubmit={handleSubmit}>
                      <div className="form-floating mb-3">
                        <input
                          type="text"
                          className="form-control"
                          id="floatingInput"
                          placeholder="Name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                        <label htmlFor="floatingInput">name</label>
                      </div>
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
                          type="password"
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
                      <div className="form-floating mb-3">
                        <input
                          type="password"
                          className="form-control"
                          id="floatingPassword"
                          placeholder="Confirm Password"
                          name="confirmPassword"
                          value={formData.confirmPassword}
                          onChange={handleChange}
                          required
                        />
                        <label htmlFor="floatingPassword">
                          Confirm Password
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

export default RegisterPage;
