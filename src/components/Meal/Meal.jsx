import React from "react";
import styles from "./Meal.module.css";
import { BsClock } from "react-icons/bs";
import { BiLike, BiBookmark } from "react-icons/bi";
import profilePicture from "./../../assets/images/profile.png";

const Meal = (props) => {
  return (
    <div className={styles.meal}>
      <div className={styles.background}>
        <img src={props.background} />
      </div>
      <div className={styles.description}>
        <div>
        <div className={styles.info}>
          <span className={styles.time}>
            <BsClock />
            <span>30 MINUTES</span>
          </span>
          <span className={styles.difficulty}>
            <BiLike />
            <span>SUPER EASY</span>
          </span>
        </div>
        <p className={styles.title}>
          7 easy bruschetta recipes that look fancy
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consec tetu ipisicing elit, sed do eiusmod tempo inci didunt ut labore et dolore magna aliqut en.
        </p>
        <div className={styles.user}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div className={styles.profilePicture}>
              <img src={profilePicture} alt="user profile picture" />
            </div>
            <div style={{ display: "flex", flexDirection: "column", marginLeft: "15px", marginTop: "-5px" }}>
              <span className={styles.username}>MAGI DAWSON</span>
              <span className={styles.entryDate}>May 6, 2020</span>
            </div>
          </div>
          <div className={styles.bookmark}>
            <BiBookmark />
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Meal;