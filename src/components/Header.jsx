import { Link } from "react-router-dom";


const Header = () => {
  return (
    <header>
      <Link className="img-cont">
        <img src="" alt="" />
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
        <button>Register</button>
        <button>Contact</button>
      </div>
    </header>
  );
};

export default Header;
