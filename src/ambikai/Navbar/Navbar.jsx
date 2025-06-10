import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Navbar.scss";

function Navbar() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigate = (path) => {
    navigate(path);
    setIsMenuOpen(false); // 點 menu 後自動收起
  };

  return (
    <header id="navbarHeader">
      <div className="container">
        {/* 左邊 Logo */}
        <button className="logo" onClick={() => navigate("/")}>
          <img src="./Logo.png" alt="Logo" />
        </button>

        {/* 右邊 展開選單 + Log in */}
        <div className="rightControls">
          <button
            className={`menu-toggle-button ${isMenuOpen ? "open" : ""}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? "X" : "Menu"}
          </button>

          {isMenuOpen && (
            <nav className="navbar-menu cloud-bg">
              <ul>
                <li style={{ animationDelay: '0.1s' }}>
                  <button
                    className="menu-link"
                    onClick={() => handleNavigate("/Aboutme")}   
                  >
                    About me
                  </button>
                </li>
                <li style={{ animationDelay: '0.2s' }}>
                  <button
                    className="menu-link"
                    onClick={() => handleNavigate("/Gallery")}
                  >
                    Gallery
                  </button>
                </li>
                <li style={{ animationDelay: '0.3s' }}>
                  <button
                    className="menu-link"
                    onClick={() => handleNavigate("/Products")}
                  >
                    Products
                  </button>
                </li>
                <li style={{ animationDelay: '0.4s' }}>
                  <button
                    className="menu-link"
                    onClick={() => handleNavigate("/Contact")}
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </nav>
          )}

          <button
            type="button"
            className="nbr-login"
            onClick={() => navigate("/MemberLogin")}
          >
            Log in
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
