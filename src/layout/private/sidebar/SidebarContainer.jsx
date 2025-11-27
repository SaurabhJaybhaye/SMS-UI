import React from "react";

import { useNavigate } from "react-router";

import { GiBookCover } from "react-icons/gi";
import { GrUserWorker } from "react-icons/gr";
import { PiStudentFill } from "react-icons/pi";
import { SiGoogleclassroom } from "react-icons/si";
import {
  FaBuilding,
  FaDesktop,
  FaGraduationCap,
  FaSitemap,
} from "react-icons/fa";

import SidebarComponent from "./SidebarComponent";
import {
  ALERT_ICONS,
  LOCAL_STORAGE_KEYS,
  PRIVATE_ROUTES,
} from "../../../utils/constants";
import Alert from "../../../utils/Alert";

const SidebarContainer = ({ children }) => {
  const navigate = useNavigate();
  const menuItem = [
    {
      path: PRIVATE_ROUTES.DASHBOARD,
      name: "Dashboard",
      icon: <FaDesktop />,
      //   permission: PERMISSIONS.READ_STUDENT,
    },
    {
      path: PRIVATE_ROUTES.STUDENTS,
      name: "Students",
      icon: <PiStudentFill />,
      //   permission: PERMISSIONS.READ_STUDENT,
    },
    {
      path: PRIVATE_ROUTES.EMPLOYEES,
      name: "Employees",
      icon: <GrUserWorker />,
      //   permission: PERMISSIONS.READ_EMPLOYEE,
    },
    {
      path: PRIVATE_ROUTES.EMPLOYEE_TYPE,
      name: "Employee Type",
      icon: <GrUserWorker />,
      //   permission: PERMISSIONS.READ_EMPLOYEE_TYPE,
    },
    {
      path: PRIVATE_ROUTES.ROLES,
      name: "Roles",
      icon: <FaSitemap />,
      //   permission: PERMISSIONS.READ_ROLE,
    },
    {
      path: PRIVATE_ROUTES.DEPARTMENTS,
      name: "Departments",
      icon: <FaBuilding />,
      //   permission: PERMISSIONS.READ_DEPARTMENT,
    },
    {
      path: PRIVATE_ROUTES.COURSES,
      name: "Courses",
      icon: <FaGraduationCap />,
      //   permission: PERMISSIONS.READ_COURSE,
    },
    {
      path: PRIVATE_ROUTES.CLASSES,
      name: "Classes",
      icon: <SiGoogleclassroom />,
      //   permission: PERMISSIONS.READ_CLASS,
    },
    {
      path: PRIVATE_ROUTES.SUBJECTS,
      name: "Subjects",
      icon: <GiBookCover />,
      //   permission: PERMISSIONS.READ_SUBJECT,
    },
  ];
  const logOut = () => {
    localStorage.clear();
    navigate(PRIVATE_ROUTES.login);
    Alert("Log out Successful", ALERT_ICONS.SUCCESS);
  };

  const userData = JSON.parse(
    localStorage.getItem(LOCAL_STORAGE_KEYS.LOGGED_IN_USER)
  );
  return (
    <>
      <SidebarComponent
        userData={userData.userData}
        logOut={logOut}
        menuItem={menuItem}
      >
        {children}
      </SidebarComponent>
    </>
  );
};

export default SidebarContainer;
