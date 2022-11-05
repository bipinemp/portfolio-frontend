import React from "react";
import { Link } from "react-router-dom";
import "./css/respside.css";
import { FaGithub, FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";

const Sidebar = ({ setClick }) => {
  return (
    <div className="respsidebar">
      <div className="profile">
        <Link to="/" onClick={() => setClick(false)} className="not-this">
          B
        </Link>
        <span className="name">Bipin</span>
        <p>Web Developer</p>
      </div>

      <div className="links">
        <Link to="/about" onClick={() => setClick(false)}>
          About
        </Link>
        <Link to="/myskills" onClick={() => setClick(false)}>
          My Skills
        </Link>
        <Link to="/work" onClick={() => setClick(false)}>
          Work
        </Link>
        <Link to="/contact" onClick={() => setClick(false)}>
          Contact
        </Link>
        <span className="social">
          <FaGithub size="2em" className="icon" />
          <FaFacebookSquare size="2em" className="icon" />
          <FaInstagramSquare size="2em" className="icon" />
        </span>
      </div>
    </div>
  );
};

export default Sidebar;
