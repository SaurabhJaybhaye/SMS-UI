import React from "react";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import PublicRoute from "./PublicRoute";
import PrivateRoutes from "./PrivateRoutes";
const RootRouter = () => {
  const router = createBrowserRouter([...PublicRoute, ...PrivateRoutes]);
  return <RouterProvider router={router} />;
};

export default RootRouter;
