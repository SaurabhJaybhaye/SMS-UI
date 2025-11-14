import React from "react";
import "./LoginPage.css";
const LoginPage = ({ formik }) => {
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

                    <form onSubmit={formik?.handleSubmit}>
                      <div className="form-floating mb-3">
                        <input
                          type="text"
                          className="form-control"
                          id="floatingInput"
                          placeholder="name@example.com"
                          name="email"
                          onChange={formik?.handleChange}
                          value={formik?.values.email}
                          onBlur={formik?.handleBlur}
                        />
                        <label htmlFor="floatingInput">Email address</label>
                        {formik?.errors.email && formik?.touched.email ? (
                          <p className="text-danger ms-1 error-text pb-0 mb-0">
                            {formik?.errors.email}
                          </p>
                        ) : null}
                      </div>
                      <div className="form-floating mb-3">
                        <input
                          type={
                            formik?.values.showPassword ? "text" : "password"
                          }
                          className="form-control"
                          id="floatingPassword"
                          placeholder="Password"
                          name="password"
                          onChange={formik?.handleChange}
                          value={formik?.values.password}
                          onBlur={formik?.handleBlur}
                        />
                        <label htmlFor="floatingPassword">Password</label>
                        {formik?.errors.password && formik?.touched.password ? (
                          <p className="text-danger ms-1 mb-0 pb-0 error-text">
                            {formik?.errors.password}
                          </p>
                        ) : null}
                      </div>

                      <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="rememberPasswordCheck"
                          name="showPassword"
                          onChange={formik?.handleChange}
                          value={formik?.values.showPassword}
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
                          disabled={!formik?.dirty || !formik?.isValid}
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
