import React from "react";
import "../assets/styles/ContactUs.css";

const ContactUs = () => {
  return (
    <section className="contact">
      <div className="contact-text">
        <h2>
          Want To Talk With <span>Us!</span>
        </h2>
        <h4>Send your Details Via This Form.</h4>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
      <div className="contact-form">
        <form action="">
          <input type="text" placeholder="Your Name" required />
          <input type="text" placeholder="Your Address" required />
          <input type="text" placeholder="Your Country" required />
          <input type="email" placeholder="Your Email Address" required />
          <input type="number" placeholder="Your Mobile Number" required />
          <textarea
            cols="35"
            rows="10"
            placeholder="Description"
            required
          ></textarea>
          <input type="submit" value="Send Message" className="submit" />
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
