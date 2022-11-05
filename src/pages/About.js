import React from "react";
import Sidebar from "../common/Sidebar";
import "./css/about.css";
import { useNavigate } from "react-router-dom";
import "../index.css";

const About = () => {
  const navigate = useNavigate();
  return (
    <div className="about-main">
      <Sidebar />
      <div className="about">
        <div className="about-cursive">
          <p>{"</html>"}</p>
          <p>&nbsp;&nbsp;{"<body>"}</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;{"<h1>"}</p>
        </div>
        <div className="about-title">
          <span className="span1">M</span>
          <span className="span2">y</span>
          <span className="span3">, </span>
          <span className="span4">M</span>
          <span className="span5">y</span>
          <span className="span6">s</span>
          <span className="span7">e</span>
          <span className="span8">l</span>
          <span className="span9">f </span>
          <span className="span10">& </span>
          <span className="span11">I</span>
        </div>
        <div className="about-cursive">
          <p>&nbsp;&nbsp;&nbsp;&nbsp;{"</h2>"}</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;{"<p>"}</p>
        </div>
        <div className="about-p">
          <p>
            I'm a Front-End Developer Located in Nepal. I am a beginner in this
            field of web development.I am studying B.Sc CSIT, currently at 5th
            semester.I'm planning to make web development as career.
            <br />
            <br /> I'm always interested to work on frontend projects with
            positive people.
          </p>
          <br />
          <p onClick={() => navigate("/contact")} className="about-btn">
            Let's make something special.
          </p>
        </div>
        <div className="about-cursive">
          <p>&nbsp;&nbsp;&nbsp;&nbsp;{"</p>"}</p>
          <p>&nbsp;&nbsp;{"</body>"}</p>
          <p>{"</html>"}</p>
        </div>
      </div>
      <div className="about-side">
        <div className="child">HTML</div>
        <div className="child">CSS</div>
        <div className="child">JS</div>
        <div className="child">ReactJs</div>
      </div>
    </div>
  );
};

export default About;
