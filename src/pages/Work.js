import React, { useState, useEffect } from "react";
import Sidebar from "../common/Sidebar";
import "./css/work.css";
import { useNavigate } from "react-router-dom";

const Work = () => {
  const [popup, setPopup] = useState(false);
  const [notify, setNotify] = useState(true);
  const [small, setSmall] = useState(false);
  const [src, setSrc] = useState("");

  const codeClicked = (val) => {
    setSmall(false);
    setPopup(true);
    setSrc(val);
  };

  const smallImage = (val) => {
    setSmall(true);
    setPopup(true);
    setSrc(val);
  };

  useEffect(() => {
    setTimeout(() => {
      setNotify(false);
    }, 6000);
  }, []);

  const navigate = useNavigate();
  return (
    <div className="work-main">
      <Sidebar />
      {popup ? (
        <div className={small ? "popup smallpopup" : "popup"}>
          <img
            alt="popup"
            src={process.env.PUBLIC_URL + `/images/${src}.png`}
          />
          <button className="popup-btn" onClick={() => setPopup(false)}>
            x
          </button>
        </div>
      ) : (
        ""
      )}
      <div className="work">
        {notify && (
          <p className="notify">
            Note: Designs are inspired from internet not code :)
          </p>
        )}

        <div>
          <img
            alt="netflix"
            src={process.env.PUBLIC_URL + "/images/restaurant-poster.png"}
          />
          <span
            className="code"
            onClick={() => codeClicked("restaurant-clone")}
          >
            View Code
          </span>
        </div>

        <div>
          <img
            alt="netflix"
            src={process.env.PUBLIC_URL + "/images/netflix-poster.png"}
          />
          <span className="code" onClick={() => codeClicked("netflix-clone")}>
            View Code
          </span>
        </div>
        <div>
          <img
            alt="netflix"
            src={process.env.PUBLIC_URL + "/images/pizza-poster.png"}
          />
          <span className="code" onClick={() => codeClicked("pizza-clone")}>
            View Code
          </span>
        </div>
        <div>
          <img
            alt="netflix"
            src={process.env.PUBLIC_URL + "/images/weather-poster.png"}
          />
          <span className="code" onClick={() => smallImage("weather")}>
            View Code
          </span>
        </div>
        <div>
          <img
            alt="netflix"
            src={process.env.PUBLIC_URL + "/images/travel-poster.png"}
          />
          <span className="code" onClick={() => codeClicked("travel-clone")}>
            View Code
          </span>
        </div>
        <div>
          <img
            alt="netflix"
            src={process.env.PUBLIC_URL + "/images/pokemon-poster.png"}
          />
          <span className="code" onClick={() => smallImage("pokemon-clone")}>
            View Code
          </span>
        </div>
        <div>
          <img
            alt="netflix"
            src={process.env.PUBLIC_URL + "/images/ludo-poster.png"}
          />
          <span className="code" onClick={() => smallImage("ludo-clone")}>
            View Code
          </span>
        </div>
        <div>
          <img
            alt="netflix"
            src={process.env.PUBLIC_URL + "/images/laugh-poster.png"}
          />
          <span className="code" onClick={() => navigate("/")}>
            View Code
          </span>
        </div>
      </div>
    </div>
  );
};

export default Work;
