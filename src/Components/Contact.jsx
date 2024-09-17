import React from "react";

const Contact = () => {
  return (
    <footer id="contact" className="contact-container">
      <div className="contact-text">
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className="contact-links">
        <li className="contact-link">
          <img src="assets/contact/emailIcon.png" alt="Email icon" />
          <a href="mailto:mohammadyaseenDev@gmail.com" className="contact-mail">mohammadyaseenDev@gmail.com</a>
        </li>
        <li className="contact-link">
          <img
            src="assets/contact/linkedinIcon.png"
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/myname" className="contact-mail">linkedin.com/mohammadyaseen</a>
        </li>
        <li className="contact-link">
          <img src="assets/contact/githubIcon.png" alt="Github icon" />
          <a href="https://www.github.com/mshaik" className="contact-mail">github.com/mshaik</a>
        </li>
      </ul>
    </footer>
  );
};

export default Contact;
