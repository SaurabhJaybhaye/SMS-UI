import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";
import { PUBLIC_ROUTES } from "../../utils/constants";
import HeaderComponent from "./header/HeaderComponent";

const PrivateLayout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("loggedInUser"));
    if (!user || !user?.isLoggedIn) {
      console.error("Please login to access private routes");
      navigate(`/${PUBLIC_ROUTES.LOGIN}`);
      return;
    }
  }, [navigate]);

  return (
    <>
      <HeaderComponent />
      <Outlet />
    </>
  );
};

export default PrivateLayout;
