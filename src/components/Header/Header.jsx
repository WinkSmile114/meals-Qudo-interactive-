import React from "react";
import classes from "./Header.module.css";
import MainNavbar from "./MainNavbar/MainNavbar";
import MiddleNavbar from "./MiddleNavbar/MiddleNavbar";
import TopNavbar from "./TopNavbar/TopNavbar";

const Header = () => {
  return (
    <header className={classes.header}>
      {/** top area navbar goes below */}
      <TopNavbar />

      {/** middle area navbar goes below */}
      <MiddleNavbar />

      {/** main navbar goes below */}
      <MainNavbar />
    </header>
  );
}

export default Header;