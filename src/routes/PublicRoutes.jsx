//src\routes\PublicRoutes.jsx
import React from "react";
import PublicLayout from "../layouts/public/PublicLayout";
import LoginPage from "../pages/public/login/LoginPage";
import SignupPage from "../pages/public/signup/SignupPage";
import ForgotPasswordPage from "../pages/public/forgot-password/ForgotPasswordPage";
import HomePage from "../pages/public/home/HomePage";
import PageNotFound from "../pages/public/page-not-found/PageNotFound";
import RegisterPage from "../pages/public/register/RegisterPage";

const PublicRoutes = [
  {
    path: "/",
    ErrorBoundary: {
      PageNotFound,
    },
    element: <PublicLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "login", element: <LoginPage /> },
      { path: "signup", element: <RegisterPage /> },
      { path: "forgot-password", element: <ForgotPasswordPage /> },
    ],
  },
];

export default PublicRoutes;
