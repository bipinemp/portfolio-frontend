import React from "react";
import Sidebar from "../common/Sidebar";
import "./css/home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home-main">
      <Sidebar />
      <div className="home">
        <div className="top-p">
          <p>{"</html>"}</p>
          <p>&nbsp;&nbsp;{"<body>"}</p>
          <p> &nbsp;&nbsp;&nbsp;&nbsp;{"<h1>"}</p>
        </div>
        <div className="h1">
          <h1>
            <span className="span1">H</span>
            <span className="span2">i</span>
            <span className="span3">,</span>
            <br />
            <span className="span4">I</span>
            <span className="span5">'</span>
            <span className="span6">m </span>
            <span className="span7 not-this">B</span>
            <span className="span8">i</span>
            <span className="span9">p</span>
            <span className="span10">i</span>
            <span className="span11">n</span>
            <span className="span12">,</span>
            <br />
            <span className="span13">w</span>
            <span className="span14">e</span>
            <span className="span15">b </span>
            <span className="span16">d</span>
            <span className="span17">e</span>
            <span className="span18">v</span>
            <span className="span19">e</span>
            <span className="span20">l</span>
            <span className="span21">o</span>
            <span className="span22">p</span>
            <span className="span23">e</span>
            <span className="span24">r</span>
          </h1>
        </div>
        <div className="bottom-p">
          <p>&nbsp;&nbsp;&nbsp;&nbsp;{"</h1>"}</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;{"<p>"}</p>
          <div className="paragraph">
            <p className="frontend">Front End Developer / Beginner</p>
          </div>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;{"</p>"}</p>
          <button className="contact" onClick={() => navigate("/contact")}>
            Contact me!
          </button>
          <p>&nbsp;&nbsp;{"</body>"}</p>
          <p>{"</html>"}</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
