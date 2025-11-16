import React, { useState } from "react";
import "../login/LoginPage.css";
import { useNavigate } from "react-router";
import DropDown from "../../../components/select/DropDown";
const RegisterPage = () => {
  const navigate = useNavigate();
  const roleOptions = [
    {
      value: "user",
      label: "User",
    },
    {
      value: "admin",
      label: "Admin",
    },
    {
      value: "teacher",
      label: "Teacher",
    },
    {
      value: "student",
      label: "Student",
    },
  ];

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("user");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Password and confirm password do not match");
      return;
    }
    console.log("Login attempted with", {
      email,
      password,
      name,
      role,
    });
    const prevUsers = JSON.parse(localStorage.getItem("registeredUser")) || [];
    console.log("Previous Users:", prevUsers);
    prevUsers.push({ email, password, name, role });
    localStorage.setItem("registeredUser", JSON.stringify(prevUsers));
    alert("Register successful");
    navigate("/login");
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
                    <h3 className="login-heading mb-4">Welcome back!</h3>

                    <form>
                      <div className="form-floating mb-3">
                        <input
                          type="text"
                          className="form-control"
                          id="floatingInput"
                          placeholder="Name"
                          name="text"
                          onChange={(e) => {
                            setName(e.target.value);
                          }}
                        />
                        <label htmlFor="floatingInput">Name</label>
                      </div>

                      <div className="form-floating mb-3">
                        <input
                          type="text"
                          className="form-control"
                          id="floatingInput"
                          placeholder="name@example.com"
                          name="email"
                          onChange={(e) => {
                            setEmail(e.target.value);
                          }}
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
                          onChange={(e) => {
                            setPassword(e.target.value);
                          }}
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
                          onChange={(e) => {
                            setConfirmPassword(e.target.value);
                          }}
                        />
                        <label htmlFor="floatingPassword">
                          Confirm-Password
                        </label>
                      </div>

                      <div className="form-floating mb-3">
                        <DropDown
                          options={roleOptions}
                          name="role"
                          onChange={(value) => {
                            setRole(value);
                          }}
                          placeholder="select Role *"
                          value={role}
                        />
                      </div>

                      <div className="d-grid">
                        <button
                          className="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2"
                          type="button"
                          onClick={handleSubmit}
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
