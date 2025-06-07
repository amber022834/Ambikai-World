import { Link, NavLink, useNavigate } from "react-router-dom";
import "./Navbar.scss";

function Navbar() {
  const navigate = useNavigate();

  return (
    <header id="navbarHeader">
      <div className="container">
        <nav id="navbar">
          

          <div className="menu">
            <ul>
              <li>
                <button className="menu-link" onClick={() => navigate("/Aboutme")}>
                  About me
                </button>
              </li>
              <li>
                <button className="menu-link" onClick={() => navigate("/Gallery")}>
                  Gallery
                </button>
              </li>
              <li>
                <button className="menu-link" onClick={() => navigate("/Products")}>
                  Products
                </button>
              </li>
              <li>
                <button className="menu-link" onClick={() => navigate("/Contact")}>
                  Contact
                </button>
              </li>
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
