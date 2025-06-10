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
                <li >
                  <button
                    className="menu-link"
                    onClick={() => handleNavigate("/Aboutme")}

                  >
                    <span>關於我</span>
                  </button>
                </li>
                <li >
                  <button
                    className="menu-link"
                    onClick={() => handleNavigate("/Gallery")}
                  >
                    <span>作品集</span>
                  </button>
                </li>
                <li >
                  <button
                    className="menu-link"
                    onClick={() => handleNavigate("/Products")}
                  >
                    <span> 商品</span>
                  </button>
                </li>
                <li >
                  <button
                    className="menu-link"
                    onClick={() => handleNavigate("/Contact")}
                  >
                    <span>聯絡</span>
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
