import { Link } from "react-router-dom";
import "./styles/Header.css";

const Header = () => {
  return (
    <header>
      <section className="header-cont">
        <Link className="img-cont">
          <img
            src="/public/images/aptech-logo.png
        "
            alt=""
          />
        </Link>
        <nav className="nav-cont">
          <Link>
            <p>Home</p>
          </Link>
          <Link>
            <p>About Us</p>
          </Link>
          <Link>
            <p>Services</p>
          </Link>
        </nav>

        <div className="cta-button">
          <button className="register-btn">Register</button>
          <button className="contact-btn">Contact</button>
        </div>
      </section>
    </header>
  );
};

export default Header;
