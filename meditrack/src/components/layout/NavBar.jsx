import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleLogoutClick = () => {
    logout();
    closeMenu();
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <div className="navbar-logo">MediTrack</div>

        <button
          className="navbar-hamburger"
          type="button"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span className="hamburger-line" />
          <span className="hamburger-line" />
          <span className="hamburger-line" />
        </button>

        <div className={`navbar-links ${isMenuOpen ? "open" : ""}`}>
          <NavLink to="/" onClick={closeMenu} className="navbar-link">
            Home
          </NavLink>
          <NavLink to="/doctors" onClick={closeMenu} className="navbar-link">
            Doctors
          </NavLink>
          <NavLink to="/expired" onClick={closeMenu} className="navbar-link">
            Expired
          </NavLink>
          <NavLink to="/about" onClick={closeMenu} className="navbar-link">
            About
          </NavLink>
          <NavLink to="/settings" onClick={closeMenu} className="navbar-link">
            Settings
          </NavLink>

          {!isAuthenticated ? (
            <NavLink
              to="/login"
              onClick={closeMenu}
              className="navbar-link"
            >
              Login
            </NavLink>
          ) : (
            <button
              type="button"
              className="navbar-link navbar-link-button"
              onClick={handleLogoutClick}
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}