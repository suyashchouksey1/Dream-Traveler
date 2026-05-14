import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

import { NavLink, useLocation } from "react-router-dom";
import "../Styles/Navbar.css";

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();        // use context logout
    navigate("/login");
  };

  return (
    <nav className={`main-navbar ${isHome ? "navbar-home" : "navbar-inner"}`}>
      <div className="navbar-title">Dream Traveler</div>

      <ul className="navbar-links">
        <NavLink className="NavLink" to="/">Home</NavLink>
        <NavLink to="/about"    className={({ isActive }) =>
           `NavLink ${isActive ? "active-link" : ""}`}> About </NavLink>
        <NavLink to="/services" className={({ isActive }) => `NavLink ${isActive ? "active-link" : ""}`}> Services </NavLink>
        <NavLink to="/packages" className={({ isActive }) => `NavLink ${isActive ? "active-link" : ""}`}> Packages </NavLink>

        <li className="nav-dropdown">
          <span className="dropdown-toggle pages"> Pages ▾</span>
          <ul className="dropdown-menu">
            <li> <NavLink to="/destination">Destination</NavLink> </li>
            <li> <NavLink to="/booking">Booking</NavLink> </li>
            <li> <NavLink to="/process">Process</NavLink> </li>
            <li> <NavLink to="/guide">Travel Guides</NavLink> </li>
          </ul>
        </li>

        <NavLink to="/footer"  className={({ isActive }) => `NavLink ${isActive ? "active-link" : ""}`}> Contact Us </NavLink>
        
        {!user ? (
          <button className="register" onClick={() => navigate("/login")}>
            Login
          </button>
        ) : (
          <button className="register" onClick={handleLogout}>
          Logout
          </button>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;