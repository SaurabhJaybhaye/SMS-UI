import React from "react";
import HeaderComponent from "./header/HeaderComponent";
import { Outlet } from "react-router";
const PublicLayout = () => {
  return (
    <>
      <HeaderComponent />
      <Outlet />
    </>
  );
};

export default PublicLayout;
