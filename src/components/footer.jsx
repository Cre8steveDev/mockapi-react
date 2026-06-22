import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="footer-inner-cont">
        <div className="main-footer-content">
          <img src="/src/assets/image.png" alt="logo" className="logo-img" />
          <p className="Business-Description">
            Aptech Computer Education is a renowned ICT institute in Benin City,
            Edo State
          </p>
        </div>
        <div className="aside-content">
          <h3>Navigation</h3>
          <nav className="footer-nav-links">
            <a href="index.html">Home</a>
            <a href="about-us.html">About Us</a>
            <a href="contact-us.html">Contact Us</a>
            <a href="blog.html">Blog</a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
