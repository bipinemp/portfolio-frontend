import React from "react";
import "./css/sidebar.css";
import { FaGithub, FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="profile">
        <Link to="/" className="not-this">
          B
        </Link>
        <span className="name">Bipin</span>
        <p>Web Developer</p>
      </div>

      <div className="links">
        <NavLink
          style={({ isActive }) => ({
            color: isActive ? "#39ff14" : "#c4c4c4",
          })}
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          style={({ isActive }) => ({
            color: isActive ? "#39ff14" : "#c4c4c4",
          })}
          to="/myskills"
        >
          My Skills
        </NavLink>
        <NavLink
          style={({ isActive }) => ({
            color: isActive ? "#39ff14" : "#c4c4c4",
          })}
          to="/work"
        >
          Work
        </NavLink>
        <NavLink
          style={({ isActive }) => ({
            color: isActive ? "#39ff14" : "#c4c4c4",
          })}
          to="/contact"
        >
          Contact
        </NavLink>
        <span className="social">
          <FaGithub
            onClick={() => {
              window.open("https://github.com/bipinemp", "_blank");
            }}
            size="2em"
            className="icon"
          />

          <FaFacebookSquare
            onClick={() => {
              window.open(
                "https://www.facebook.com/bipin.bhandari.7146/",
                "_blank"
              );
            }}
            size="2em"
            className="icon"
          />
          <FaInstagramSquare
            onClick={() => {
              window.open("https://www.instagram.com/bipin.emp/", "_blank");
            }}
            size="2em"
            className="icon"
          />
        </span>
      </div>
    </div>
  );
};

export default Sidebar;
