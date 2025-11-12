//src\routes\PublicRoutes.jsx
import React from "react";
import PublicLayout from "../layouts/public/PublicLayout";
import LoginPage from "../pages/public/login/LoginPage";
import SignupPage from "../pages/public/signup/SignupPage";
import ForgotPasswordPage from "../pages/public/forgot-password/ForgotPasswordPage";
import HomePage from "../pages/public/home/HomePage";

const PublicRoutes = [
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "login", element: <LoginPage /> },
      { path: "register", element: <SignupPage /> },
      { path: "forgot-password", element: <ForgotPasswordPage /> },
    ],
  },
];

export default PublicRoutes;
