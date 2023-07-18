import React from 'react';
import classes from "./Footer.module.css";
import SocialLinks from "./../SocialLinks/SocialLinks";
import MainLinks from './../MainLinks/MainLinks';

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <p>&copy; 2020 Qode Interactive, All Rights Reserved</p>
      <MainLinks />
      <SocialLinks />
    </footer>
  );
}

export default Footer;