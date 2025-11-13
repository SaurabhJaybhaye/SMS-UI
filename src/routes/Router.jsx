//src\routes\Router.jsx
import React from "react";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import PublicRoutes from "./PublicRoutes";
import PrivateRoutes from "./PrivateRoutes";

const Router = () => {
  const routes = createBrowserRouter([...PublicRoutes, ...PrivateRoutes]);
  return <RouterProvider router={routes} />;
};

export default Router;
