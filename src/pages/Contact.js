import React from "react";

import Hero from "../components/Hero";
import Banner from "../components/Banner";
import ContactForm from "../components/ContactForm";

const Contact = () => (
  <>
    <Hero hero="contactHero">
      <Banner
        title="get in touch"
        subtitle="We can help you book a room, get directions or answer any questions"
      >
        <a href="#contact-form-container" className="btn-primary">
          Contact Us
        </a>
      </Banner>
    </Hero>
    <p className="contact-paragraph">
      Welcome to Our Customer Service. For your questions about our services,
      we're ready to help. <br />
      Please fill in your details below and we will use the information provided
      for customer service purposes. Please note that we respect your privacy
      and will only use your data for services purposes and will not share it
      with third parties.
    </p>
    <ContactForm />
  </>
);

export default Contact;
