import { NavLink } from "react-router";

import logo from "../../../assets/icons/logo.svg";
import { SCHOOL_NAME, PRIVATE_ROUTES } from "../../../utils/constants";
import "./Sidebar.scss";
import profileImage from "../../../assets/images/Profileimages.jpg";
// import { userHasPermission } from "../../utils/commonFunctions";
const SidebarComponent = ({ userData, logOut, menuItem, children }) => {
  return (
    <>
      <div id="sidebarComponent" className="container-fluid">
        <div className="row flex-nowrap">
          <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
              <span className="d-flex align-items-center pb-3 mb-md-0  me-md-auto text-white text-decoration-none">
                <span>
                  <img src={logo} className="logo" alt="logo" />
                </span>
                <span className="fs-5 d-none ms-3 d-sm-inline">
                  {SCHOOL_NAME}
                </span>
              </span>
              <ul
                className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
                id="menu"
              >
                {menuItem.map(
                  (menu, index) => (
                    //   userHasPermission(menu.permission) ||
                    //   menu.name === "Dashboard" ? (
                    <li key={index} className="nav-item mt-2 w-100">
                      <NavLink
                        to={menu.path}
                        className="nav-link align-middle px-0"
                        title={menu.name}
                      >
                        <div className="ms-3 me-4 ">
                          <span className="fs-5">{menu.icon}</span>
                          <span className="ms-3 d-none d-sm-inline">
                            {menu.name}
                          </span>
                        </div>
                      </NavLink>
                    </li>
                  )
                  //   ) : null
                )}
              </ul>
              <hr />
              <div className="dropdown pb-4">
                <span
                  className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
                  id="dropdownUser1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src={userData?.image ? userData.image : profileImage}
                    alt="hugenerd"
                    width="30"
                    height="30"
                    className="rounded-circle"
                  />
                  <span className="d-none cursor-pointer d-sm-inline mx-1">
                    {userData?.name}
                  </span>
                </span>
                <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                  <li>
                    <NavLink
                      to={PRIVATE_ROUTES.profile}
                      className="dropdown-item"
                    >
                      Profile
                    </NavLink>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <span className="dropdown-item" onClick={logOut}>
                      Sign out
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col py-3">{children}</div>
        </div>
      </div>
    </>
  );
};

export default SidebarComponent;
