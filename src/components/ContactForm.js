import React from "react";
import { IoMdCall, IoMdLocate } from "react-icons/io";

const ContactForm = () => (
  <section className="form-container">
    <div className="company-info-wrapper">
      <div className="company-info">
        <h3>Adress and phone number:</h3>
        <ul>
          <li>
            <span className="company-info-icon">
              <IoMdLocate />
            </span>
            Bulevar Revolucije 999, Belgrade
          </li>
          <li>
            <span className="company-info-icon">
              <IoMdCall />
            </span>
            +381 23 456 78 90
          </li>
        </ul>
      </div>

      <div id="contact-form-container">
        <form
          className="contact-form"
          method="POST"
          onClick={(e) => e.preventDefault()}
        >
          <p>
            <label htmlFor="name">
              Your name <span className="star">*</span>
            </label>
            <input type="text" name="name" minlength="3" required />
          </p>
          <p>
            <label htmlFor="email">
              Your Email <span className="star">*</span>
            </label>
            <input type="email" name="email" required />
          </p>
          <p className="full">
            <label htmlFor="message">
              Your message <span className="star">*</span>
            </label>
            <textarea name="message" rows="5" required></textarea>
          </p>
          <p className="full">
            <button className="btn-primary">Submit</button>
          </p>
        </form>
      </div>
    </div>
  </section>
);

export default ContactForm;
