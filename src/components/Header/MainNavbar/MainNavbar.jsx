import React from "react";
import MainLinks from "./../../MainLinks/MainLinks";
import SocialLinks from "./../../SocialLinks/SocialLinks";
import classes from "./MainNavbar.module.css";

const MainNavbar = () => {
  return (
    <nav className={classes.navbar}>
      <div>
        <MainLinks />
        <SocialLinks />
      </div>
    </nav>
  );
}

export default MainNavbar;