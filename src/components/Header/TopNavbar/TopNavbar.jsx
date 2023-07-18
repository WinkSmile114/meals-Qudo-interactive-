import React from "react";
import classes from "./TopNavbar.module.css";
import { FaRegSmile, FaRegUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const TopNavbar = () => {
  return (
    <nav className={classes.topArea}>
      <div>
        <ul className={classes.topAreaLinks}>
          <li>
            <NavLink to="/forums">Forums</NavLink>
          </li>
          <li>
            <NavLink to="/desserts">Desserts</NavLink>
          </li>
          <li>
            <NavLink to="/books">Books</NavLink>
          </li>
          <li>
            <NavLink to="/all-recipes">All Recipes</NavLink>
          </li>
          <li>
            <NavLink to="/popular">Popular</NavLink>
          </li>
        </ul>
      </div>
      <div className={classes.login}>
        <ul>
          <li>
            <NavLink to="/register">
              <FaRegSmile />Register
            </NavLink>
          </li>
          <li>
            <NavLink to="/login">
              <FaRegUser />Login
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default TopNavbar;