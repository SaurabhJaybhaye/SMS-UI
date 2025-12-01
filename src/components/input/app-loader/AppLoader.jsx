import React from "react";
import "./AppLoader.css";

const AppLoader = () => {
  return (
    <div className="app-loader-wrapper">
      <div className="app-loader"></div>
      <p className="app-loader-text">Loading...</p>
    </div>
  );
};

export default AppLoader;
