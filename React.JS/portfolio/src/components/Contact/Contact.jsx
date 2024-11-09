import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="relative contact-container w-full min-h-screen bg-black flex flex-col items-center justify-center p-3">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-blue-900/10 to-transparent opacity-20"></div>
      
      <div className="relative w-full flex flex-col justify-center items-center gap-4 rounded-lg shadow-lg animate-fadeIn py-8">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 mb-8 heading-glow">
          Connect with me.
        </h1>
        
        {/* Social Links */}
        <div className="flex flex-wrap gap-3 bg-gray-600/30 backdrop-blur-sm p-4 rounded-2xl social-links-container animate-slideUp">
          <a className="icon-link" href="https://github.com/vinit-solanki/" style={{ width: "50px", height: "50px" }}>
            <img src="/assets/icons8-github-96.png" alt="GitHub" className="social-icon" />
          </a>
          <a className="icon-link" href="https://www.linkedin.com/in/vinit-solanki-ba091127b/" style={{ width: "50px", height: "50px" }}>
            <img src="/assets/icons8-linkedin-100.png" alt="LinkedIn" className="social-icon" />
          </a>
          <a className="icon-link" href="https://leetcode.com/u/VinitSolanki05/" style={{ width: "50px", height: "50px" }}>
            <img src="/assets/leetcode-icon.png" alt="LeetCode" className="social-icon" />
          </a>
          <a className="icon-link" href="https://x.com/VINITSOLAN82916" style={{ width: "50px", height: "50px" }}>
            <img src="/assets/icons8-x-90.png" alt="X (formerly Twitter)" className="social-icon" />
          </a>
          <a className="icon-link" href="https://www.instagram.com/notanerd_005/" style={{ width: "50px", height: "50px" }}>
            <img src="/assets/icons8-instagram-96.png" alt="Instagram" className="social-icon" />
          </a>
        </div>

        {/* Contact Form */}
        <div className="w-full max-w-md mx-4 bg-gray-800/80 backdrop-blur-sm p-6 border border-gray-700 rounded-lg shadow-lg form-container animate-fadeIn">
          <form className="space-y-4">
            <div className="form-group">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="input-field"
                placeholder="name@gmail.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-white">
                Your message
              </label>
              <textarea
                id="message"
                rows="4"
                className="input-field"
                placeholder="Write your thoughts here..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="submit-button"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
