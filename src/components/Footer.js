import React from "react";
import { IoLogoInstagram, IoLogoTwitter, IoLogoFacebook } from "react-icons/io";

const Footer = () => {
  return (
    <footer>
      <section className="footer-info">
        <p>
          Phone number: <strong>+381 23 456 78 90</strong>
        </p>
        <p>
          Adress: <strong>Bulevar Revolucije 999, Belgrade</strong>
        </p>
      </section>
      <section className="social">
        <p>Follow Us</p>
        <div className="icons">
          <a
            href="/"
            className="facebook"
            rel="noreferrer noopener"
            target="_blank"
          >
            <IoLogoFacebook />
          </a>
          <a
            href="/"
            className="instagram"
            rel="noreferrer noopener"
            target="_blank"
          >
            <IoLogoInstagram />
          </a>
          <a
            href="/"
            className="twitter"
            rel="noreferrer noopener"
            target="_blank"
          >
            <IoLogoTwitter />
          </a>
        </div>
      </section>
      <section className="dev-info">
        <p>&copy; 2020 Company Name. All rights reserved.</p>
        <p>
          Created by:{" "}
          <a
            href="https://github.com/jovan6jovan"
            rel="noreferrer noopener"
            target="_blank"
          >
            jovan6jovan
          </a>
        </p>
      </section>
    </footer>
  );
};

export default Footer;
