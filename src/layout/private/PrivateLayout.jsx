import React from "react";
import { Outlet } from "react-router";

const PrivateLayout = () => {
  return (
    <>
      <h1>Private Layout Header</h1>
      <Outlet />
    </>
  );
};

export default PrivateLayout;
