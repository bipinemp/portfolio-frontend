import React from "react";
import Sidebar from "../common/Sidebar";
import "./css/skills.css";
import { useNavigate } from "react-router-dom";

const Skills = () => {
  const navigate = useNavigate();
  return (
    <div className="skills-main">
      <Sidebar />
      <div className="skills">
        <div className="skills-cursive">
          <p>{"<html>"}</p>
          <p>&nbsp;&nbsp;{"<body>"}</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;{"<h2>"}</p>
        </div>
        <div className="skills-title">
          <span>S</span>
          <span className="span1">k</span>
          <span className="span2">i</span>
          <span className="span3">l</span>
          <span className="span4">l</span>
          <span className="span5">s </span>
          <span className="span6">
            & <br />
          </span>
          <span className="span7">E</span>
          <span className="span8">x</span>
          <span className="span9">p</span>
          <span className="span10">e</span>
          <span className="span11">r</span>
          <span className="span12">i</span>
          <span className="span13">e</span>
          <span className="span14">n</span>
          <span className="span15">c</span>
          <span className="span16">e</span>
        </div>
        <div className="skills-cursive">
          <p>&nbsp;&nbsp;&nbsp;&nbsp;{"</h2>"}</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;{"<p>"}</p>
        </div>
        <div className="skills-p">
          I am a Student studying on fifth semester of B.Sc. CSIT. I am new to
          web development. I started learning frontend web development few years
          ago. <br />I have created many projects and websites with the help of
          HTML , CSS , JS , ReactJs etc. <br />I also have very Basic knowledge
          of MERN stack , currently I'm learning MERN Btw.
          <br />
          <br />
          For more details just
          <span onClick={() => navigate("/contact")} className="skill-contact">
            &nbsp;Contact&nbsp;
          </span>
          me.
        </div>
        <div className="skills-cursive">
          <p>&nbsp;&nbsp;&nbsp;&nbsp;{"</p>"}</p>
          <p>&nbsp;&nbsp;{"</body>"}</p>
          <p>{"</html>"}</p>
        </div>
      </div>
      <div className="skills-bar">
        <h2>Front-end</h2>
        <div className="progress-bar">
          <div className="frontend-html"></div>
        </div>
        <h2>Back-end</h2>
        <div className="progress-bar">
          <div className="backend"></div>
        </div>
        <h2>ReactJS</h2>
        <div className="progress-bar">
          <div className="react"></div>
        </div>
        <h2>MongoDB</h2>
        <div className="progress-bar">
          <div className="mongo"></div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
