import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";
import { LOCAL_STORAGE_KEYS, PUBLIC_ROUTES } from "../../utils/constants";
import HeaderComponent from "./header/HeaderComponent";
import SidebarContainer from "./sidebar/SidebarContainer";

const PrivateLayout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const user = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEYS.LOGGED_IN_USER)
    );
    if (!user || !user?.isLoggedIn) {
      console.error("Please login to access private routes");
      navigate(`/${PUBLIC_ROUTES.LOGIN}`);
      return;
    }
  }, [navigate]);

  return (
    <SidebarContainer>
      <Outlet />
    </SidebarContainer>
  );
};

export default PrivateLayout;
