import React, { useEffect } from "react";
import { Outlet } from "react-router";
import { useNavigate } from "react-router";
const PrivateLayout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (!currentUser && !currentUser?.isLoggedIn) {
      navigate("/login");
      return;
    }
  }, [navigate]);
  return <Outlet />;
};

export default PrivateLayout;
