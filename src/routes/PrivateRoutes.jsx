//src\routes\PrivateRoutes.jsx
import React from "react";
import ProtectedRoutes from "./ProtectedRoutes";
import PrivateLayout from "../layouts/private/PrivateLayout";
import DashboardPage from "../pages/private/dashboard/DashboardPage";
import StudentsListingPage from "../pages/private/students/StudentsListingPage";
const PrivateRoutes = [
  {
    element: (
      <ProtectedRoutes>
        <PrivateLayout />
      </ProtectedRoutes>
    ),
    children: [
      { path: "/dashboard", element: <DashboardPage /> },
      { path: "/students", element: <StudentsListingPage /> },
    ],
  },
];

export default PrivateRoutes;
