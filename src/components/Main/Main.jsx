import React from 'react';
import classes from "./Main.module.css";
import Meal from "./../Meal/Meal";
import img from "./../../assets/images/h2-img-1.jpg";

const Main = () => {
  return (
    <main className={classes.main}>
      <h3>Main</h3>
      <div className={classes.meals}>
        <div className={classes.slider}>
        <Meal background={img} />
        <Meal background={img} />
        <Meal background={img} />
        <Meal background={img} />
        <Meal background={img} />
        </div>
      </div>
    </main>
  );
}

export default Main;