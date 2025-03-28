import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const [showEmail, setShowEmail] = useState(false);

  const toggleEmail = (event) => {
    event.preventDefault();
    setShowEmail(!showEmail);
    if (!showEmail) {
      document.querySelector(".footer").scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="footer">
      <div>
        <a href="#" className="footer-link" onClick={toggleEmail}>
          {showEmail ? "Hide Email" : "Contact Us"}
        </a>
        {showEmail && <p className="footer-text">contact@arogutu@usiu.ac.ke</p>}
      </div>
      <p className="footer-text" style={{ flexGrow: 1 }}>
        Personalized Cooking Assistant Capstone Project
      </p>
      <p className="footer-text">Created by Arsen Ogutu</p>
      <div className="social-icons">
        <a href="#">
          <FontAwesomeIcon color="#000" width={40} size="2x" icon={faTwitter} />
        </a>
        <a href="#">
          <FontAwesomeIcon
            color="#000"
            width={40}
            size="2x"
            icon={faInstagram}
          />
        </a>
        <a href="#">
          <FontAwesomeIcon
            color="#000"
            width={40}
            size="2x"
            icon={faFacebook}
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
