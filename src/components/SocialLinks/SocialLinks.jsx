import React from "react";
import classes from "./SocialLinks.module.css";
import {
  FaTwitter,
  FaInstagram,
  FaFacebookF,
  FaPinterestP,
  FaRss,
  FaYoutube,
} from "react-icons/fa";

const SocialLinks = () => {
  return (
    <div className={classes.socialLinks}>
      <ul>
        <li>
          <a href="https://www.instagram.com/" target="blank">
            <FaInstagram />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/" target="blank">
            <FaTwitter />
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/" target="blank">
            <FaFacebookF />
          </a>
        </li>
        <li>
          <a href="https://www.pinterest.com/" target="blank">
            <FaPinterestP />
          </a>
        </li>
        <li>
          <a href="https://rss.com/" target="blank">
            <FaRss />
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/" target="blank">
            <FaYoutube />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default SocialLinks;