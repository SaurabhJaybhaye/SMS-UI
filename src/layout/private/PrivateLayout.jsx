import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";
import { PUBLIC_ROUTES } from "../../utils/constants";

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
      <h1>Private Layout Header</h1>
      <Outlet />
    </>
  );
};

export default PrivateLayout;
