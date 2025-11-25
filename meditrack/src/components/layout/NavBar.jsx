import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

// NavBar with hamburger menu + Login/Logout toggle
export default function NavBar({ currentUser, onLogout }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  function toggleMenu() {
    setMenuOpen((prev) => !prev);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  function handleLogoutClick() {
    if (onLogout) {
      onLogout();
    }
    setMenuOpen(false);
    navigate("/login");
  }

  return (
    <nav className="nav-bar">
      <div className="nav-bar-row">
        {/* Hamburger button - visible on small screens via CSS */}
        <button
          type="button"
          className={`nav-toggle ${menuOpen ? "nav-toggle-open" : ""}`}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={toggleMenu}
        >
          <span />
          <span />
          <span />
        </button>

        {/* Main nav links */}
        <ul className={`nav-links ${menuOpen ? "nav-links-open" : ""}`}>
          <li>
            <NavLink to="/" end onClick={closeMenu}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/doctors" end onClick={closeMenu}>
              Doctors
            </NavLink>
          </li>
          <li>
            <NavLink to="/expired" end onClick={closeMenu}>
              Expired
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" end onClick={closeMenu}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/settings" end onClick={closeMenu}>
              Settings
            </NavLink>
          </li>

          {/* Login / Logout slot */}
          <li>
            {currentUser ? (
              <button
                type="button"
                className="nav-button"
                onClick={handleLogoutClick}
              >
                Logout
              </button>
            ) : (
              <NavLink to="/login" end onClick={closeMenu}>
                Login
              </NavLink>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}