import { Link, NavLink, useNavigate } from "react-router-dom";
import "./Navbar.scss";

function Navbar() {
  const navigate = useNavigate();

  return (
    <header id="navbarHeader">
      <div className="container">
        <nav id="navbar">
          <Link to="/" className="logo">
            <span className="Ambikai's">Ambikai's</span>
            <span className="World">World</span>
          </Link>

          <div className="menu">
            <ul>
              <li><NavLink to="/coach" className={({ isActive }) => isActive ? "active" : ""}>About me</NavLink></li>
              <li><NavLink to="/nutritionist" className={({ isActive }) => isActive ? "active" : ""}>Gallery</NavLink></li>
              <li><NavLink to="/myfavorite" className={({ isActive }) => isActive ? "active" : ""}>Products</NavLink></li>
              <li><NavLink to="/allarticle" className={({ isActive }) => isActive ? "active" : ""}>Contact</NavLink></li>
            </ul>
          </div>

          <button
            type="button"
            className="nbr-login"
            onClick={() => navigate("/MemberLogin")}
          >
            Log in 
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
