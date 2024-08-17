import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div id="contact-container" className="contact-container">
      <div className="contact-wrapper">
        <h1 className="contact-heading">Connect with me.</h1>
        <div id="links" className="social-links">
          <a href="https://github.com/vinit-solanki/" className="social-link"><img src="/assets/icons8-github-96.png" alt="GitHub" /></a>
          <a href="https://www.linkedin.com/in/vinit-solanki-ba091127b/" className="social-link"><img src="/assets/icons8-linkedin-100.png" alt="LinkedIn" /></a>
          <a href="https://leetcode.com/u/VinitSolanki05/" className="social-link"><img src="/assets/leetcode-icon.png" alt="LeetCode" /></a>
          <a href="https://x.com/VINITSOLAN82916" className="social-link"><img src="/assets/icons8-x-90.png" alt="X" /></a>
          <a href="https://www.instagram.com/notanerd_005/" className="social-link"><img src="/assets/icons8-instagram-96.png" alt="Instagram" /></a>
        </div>
        <div className="contact-form-wrapper">
          <form className="contact-form">
            <div>
              <label htmlFor="email" className="contact-label">Your email</label>
              <input
                type="email"
                name="email"
                id="email"
                className="contact-input"
                placeholder="name@gmail.com"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="contact-label">Your message</label>
              <textarea
                id="message"
                rows="4"
                className="contact-textarea"
                placeholder="Write your thoughts here..."
                required
              ></textarea>
            </div>
            <button type="submit" className="contact-submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
