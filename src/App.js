import Home from "./pages/Home";
import { FaHamburger } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import RespSide from "./common/RespSide";
import About from "./pages/About";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import "./index.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Skills from "./pages/Skills";

function App() {
  const [click, setClick] = useState(false);
  return (
    <div className="App">
      {click ? (
        <ImCross className="cross" onClick={() => setClick(false)} />
      ) : (
        <FaHamburger className="hamburger" onClick={() => setClick(true)} />
      )}

      <Router>
        {click ? <RespSide setClick={setClick} /> : ""}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/myskills" element={<Skills />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
