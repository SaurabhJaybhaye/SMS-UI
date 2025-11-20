import React from "react";
import { useNavigate } from "react-router";
import { useFormik } from "formik";
import * as Yup from "yup";
import "../login/LoginPage.css";
import { PUBLIC_ROUTES } from "../../../utils/constants";
import InputComponent from "../../../components/input/InputComponent";

// Validation schema using Yup
const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

const RegisterPage = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema,
    onSubmit: (values) => {
      const oldUsers = JSON.parse(localStorage.getItem("registeredUser")) || [];

      const updatedUsers = [
        ...oldUsers,
        {
          name: values.name,
          email: values.email,
          password: values.password,
          role: "user",
        },
      ];

      localStorage.setItem("registeredUser", JSON.stringify(updatedUsers));

      alert("Registration successful");
      navigate(`/${PUBLIC_ROUTES.LOGIN}`);
    },
  });

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

                    <form onSubmit={formik.handleSubmit}>
                      {/* Name */}
                      <InputComponent
                        type="text"
                        placeholder="Name"
                        handleChange={formik.handleChange}
                        name="name"
                        value={formik.values.name}
                        label="Name"
                      />
                      {formik.touched.name && formik.errors.name && (
                        <p className="text-danger">{formik.errors.name}</p>
                      )}

                      {/* Email */}
                      <InputComponent
                        type="email"
                        placeholder="Email"
                        handleChange={formik.handleChange}
                        name="email"
                        value={formik.values.email}
                        label="Email address"
                      />
                      {formik.touched.email && formik.errors.email && (
                        <p className="text-danger">{formik.errors.email}</p>
                      )}

                      {/* Password */}
                      <InputComponent
                        type="password"
                        placeholder="Password"
                        handleChange={formik.handleChange}
                        name="password"
                        value={formik.values.password}
                        label="Password"
                      />
                      {formik.touched.password && formik.errors.password && (
                        <p className="text-danger">{formik.errors.password}</p>
                      )}

                      {/* Confirm Password */}
                      <InputComponent
                        type="password"
                        placeholder="Confirm Password"
                        handleChange={formik.handleChange}
                        name="confirmPassword"
                        value={formik.values.confirmPassword}
                        label="Confirm Password"
                      />
                      {formik.touched.confirmPassword &&
                        formik.errors.confirmPassword && (
                          <p className="text-danger">
                            {formik.errors.confirmPassword}
                          </p>
                        )}

                      <div className="mt-3 d-grid">
                        <button
                          className="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2"
                          type="submit"
                        >
                          Sign Up
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
