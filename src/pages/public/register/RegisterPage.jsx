import React from "react";
import { useNavigate } from "react-router";
import "../login/LoginPage.css";
import { PUBLIC_ROUTES } from "../../../utils/constants";
import { useFormik } from "formik";
import { signupSchema } from "../../../utils/schemas";

const RegisterPage = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: signupSchema,
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
                      <div className="form-floating mt-3">
                        <input
                          type="text"
                          className="form-control"
                          id="floatingInputName"
                          placeholder="Name"
                          name="name"
                          value={formik.values.name}
                          onChange={formik.handleChange}
                          autoComplete="userName"
                          onBlur={formik.handleBlur}
                        />
                        <label htmlFor="floatingInputName">name</label>
                      </div>
                      {formik.touched.name && formik.errors.name && (
                        <label className="error-message">
                          {formik.errors.name}
                        </label>
                      )}

                      <div className="form-floating mt-3">
                        <input
                          type="email"
                          className="form-control"
                          id="floatingInputEmail"
                          placeholder="name@example.com"
                          name="email"
                          value={formik.values.email}
                          onChange={formik.handleChange}
                          autoComplete="email"
                          onBlur={formik.handleBlur}
                        />
                        <label htmlFor="floatingInputEmail">
                          Email address
                        </label>
                      </div>
                      {formik.touched.email && formik.errors.email && (
                        <label className="error-message">
                          {formik.errors.email}
                        </label>
                      )}
                      <div className="form-floating mt-3">
                        <input
                          type="password"
                          className="form-control"
                          id="floatingNewPassword"
                          placeholder="Password"
                          name="password"
                          value={formik.values.password}
                          onChange={formik.handleChange}
                          autoComplete="new-password"
                          onBlur={formik.handleBlur}
                        />
                        <label htmlFor="floatingNewPassword">Password</label>
                      </div>
                      {formik.touched.password && formik.errors.password && (
                        <label className="error-message">
                          {formik.errors.password}
                        </label>
                      )}
                      <div className="form-floating mt-3">
                        <input
                          type="password"
                          className="form-control"
                          id="floatingConfirmPassword"
                          placeholder="Confirm Password"
                          name="confirmPassword"
                          value={formik.values.confirmPassword}
                          onChange={formik.handleChange}
                          autoComplete="confirm-new-password"
                          onBlur={formik.handleBlur}
                        />
                        <label htmlFor="floatingConfirmPassword">
                          Confirm Password
                        </label>
                      </div>
                      {formik.touched.confirmPassword &&
                        formik.errors.confirmPassword && (
                          <label className="error-message">
                            {formik.errors.confirmPassword}
                          </label>
                        )}
                      <div className="d-grid mt-3">
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
