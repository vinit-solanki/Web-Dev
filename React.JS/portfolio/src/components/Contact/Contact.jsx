import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div id="contact-container" className="w-full min-h-screen bg-black flex flex-col items-center justify-center p-4">
      <div  className="w-full max-w-4xl bg-black flex flex-col justify-center items-center gap-4 p-4 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-white">Connect with me.</h1>
        <div id="links" className="flex flex-row gap-3 bg-gray-600 p-2 rounded-2xl">
          <a id="icon-link" href="https://github.com/vinit-solanki/" style={{width:"50px", height:"50px"}}><img src="/assets/icons8-github-96.png" alt="" /></a>
          <a id="icon-link" href="https://www.linkedin.com/in/vinit-solanki-ba091127b/" style={{width:"50px", height:"50px"}}><img src="/assets/icons8-linkedin-100.png" alt="" /></a>
          <a id="icon-link" href="https://leetcode.com/u/VinitSolanki05/" style={{width:"50px", height:"50px"}}><img src="/assets/leetcode-icon.png" alt="" /></a>
          <a id="icon-link" href="https://x.com/VINITSOLAN82916" style={{width:"50px", height:"50px"}}><img src="/assets/icons8-x-90.png" alt="" /></a>
          <a id="icon-link" href="https://www.instagram.com/notanerd_005/" style={{width:"50px", height:"50px"}}><img src="/assets/icons8-instagram-96.png" alt="" /></a>
        </div>
        <div className="w-full max-w-md bg-white p-6 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
          <form className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                placeholder="name@gmail.com"
                required
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows="4"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Write your thoughts here..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
