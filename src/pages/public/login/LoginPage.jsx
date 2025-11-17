import React, { useEffect, useState } from "react";
import "./LoginPage.css";
import { useNavigate } from "react-router";
import leftArrow from "../../../assets/icons/leftArrow.svg";

const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "saurabh",
    password: "Saurabh@123",
    showPassword: false,
  });

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (currentUser && currentUser.isLoggedIn) {
      navigate("/dashboard");
      return;
    }
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => {
      return {
        ...prevData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login attempted with", formData);
    if (!formData.email || !formData.password) {
      alert("Please fill in all fields");
      return;
    }
    const registerUser = JSON.parse(localStorage.getItem("registeredUser"));
    if (!registerUser || registerUser.length === 0) {
      alert("No registered users found. Please register first.");
      return;
    }
    const registerUserDetails = registerUser?.find(
      (user) => user.email === formData.email
    );
    console.log(
      "🚀 ~ handleSubmit ~ registerUserDetails:",
      registerUserDetails
    );
    if (
      formData.email === registerUserDetails?.email ||
      formData.password === registerUserDetails?.password
    ) {
      localStorage.setItem(
        "currentUser",
        JSON.stringify({
          email: formData.email,
          password: formData.password,
          isLoggedIn: true,
        })
      );
      alert("Login successful");
      navigate("/dashboard");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div id="login">
      <div className="container-fluid ps-md-0">
        <div className="row g-0">
          <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image">
            <img src={leftArrow} alt="left Arrow icon" className="icon" /> Go
            Home
          </div>
          <div className="col-md-8 col-lg-6">
            <div className="login d-flex align-items-center py-5">
              <div className="container">
                <div className="row">
                  <div className="col-md-9 col-lg-8 mx-auto">
                    <h3 className="login-heading mb-4">Welcome back!</h3>

                    <form>
                      <div className="form-floating mb-3">
                        <input
                          type="text"
                          className="form-control"
                          id="floatingInput"
                          placeholder="name@example.com"
                          name="email"
                          onChange={handleChange}
                          value={formData.email}
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
                          onChange={handleChange}
                          value={formData.password}
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
                          type="button"
                          onClick={handleSubmit}
                        >
                          Login
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
