import React from "react";
import classes from "./MiddleNavbar.module.css";
import logo from "./../../../logo.png";
import { IoIosSearch } from "react-icons/io";
import { VscBookmark } from "react-icons/vsc";
import { BiBasket } from 'react-icons/bi';
import { NavLink } from "react-router-dom";

const MiddleNavbar = () => {
  return (
    <nav className={classes.middleArea}>
      <div>
        <div className={classes.logo}>
          <img src={logo} alt="company logo" />
        </div>

        <div className={classes.actions}>
          <div>
            <input type="search" placeholder="Search" />
            <button className={classes.search}>
              <IoIosSearch />
            </button>
          </div>

          <div>
            <ul>
              <li>
                <NavLink to="/favourites">
                  <VscBookmark />Favourites 
                </NavLink>
              </li>
              <li>
                <NavLink to="/cart">
                  <BiBasket />Cart
                  <span>($0.00)</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MiddleNavbar;
