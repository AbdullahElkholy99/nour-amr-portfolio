import "./header.css";

import "./header.css";

function Header() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-container">

          <div className="logo">
              <img src="/assets/images/nouramr.jpeg" alt="Nour Amr" />
            </div>

          <ul className="nav-menu" id="navMenu">
            <li>
              <a href="#home" className="nav-link">
                <i className="fa-solid fa-house"></i> Home
              </a>
            </li>

            <li>
              <a href="#about" className="nav-link">
                <i className="fa-solid fa-user"></i> About
              </a>
            </li>

            <li>
              <a href="#skills" className="nav-link">
                <i className="fa-solid fa-code"></i> Skills
              </a>
            </li>

            <li>
              <a href="#portfolio" className="nav-link">
                <i className="fa-solid fa-briefcase"></i> Projects
              </a>
            </li>

            <li>
              <a href="#contact" className="nav-link">
                <i className="fa-solid fa-envelope"></i> Contact
              </a>
            </li>

            <div className="nav-menu-actions">
              <button
                className="theme-toggle mobile-theme-toggle"
                title="Toggle Dark/Light Mode"
              >
                <i className="fa-solid fa-moon"></i>
              </button>

              <button className="admin-btn mobile-admin-btn">
                Admin
              </button>
            </div>
          </ul>

          {/* <div className="nav-actions">
            <button
              className="theme-toggle"
              title="Toggle Dark/Light Mode"
            >
              <i className="fa-solid fa-moon"></i>
            </button>

            <button className="admin-btn">
              Admin
            </button>

            <div className="hamburger">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div> */}

        </div>
      </div>
    </nav>
  );
}

export default Header;
