import React, { useState, useRef } from "react";
import axios from "axios";
import Sidebar from "../common/Sidebar";
import { FaEnvelope } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { SiFiverr } from "react-icons/si";
import "./css/contact.css";

const Contact = () => {
  const form = useRef();

  const initialValues = {
    user_name: "",
    user_email: "",
    user_subject: "",
    message: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [error, setError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [line, setLine] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(validate(formValues));
    axios
      .post("/api/users", formValues)
      .then((res) =>
        setTimeout(() => {
          setIsSubmit(true);
          setFormValues({
            user_name: "",
            user_email: "",
            user_subject: "",
            message: "",
          });
        }, 2000)
      )
      .catch((error) => console.log(error));
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.user_name) {
      errors.user_name = "Name is required!";
      setLine(true);
    }
    if (!values.user_email) {
      errors.user_email = "Email is required!";
      setLine(true);
    } else if (!regex.test(values.user_email)) {
      errors.user_email = "Email is not valid!";
      setLine(true);
    }
    if (!values.user_subject) {
      errors.user_subject = "Subject is required!";
      setLine(true);
    }
    if (!values.message) {
      errors.message = "Message is required";
      setLine(true);
    }

    return errors;
  };

  return (
    <div className="contact-main">
      {/* {Object.keys(error).length === 0 && isSubmit ? (
        <span className="sucess">Sucessfully sent!!!</span>
      ) : (
        ""
      )} */}
      {isSubmit ? <span className="sucess">Sucessfully sent!!!</span> : ""}
      <Sidebar />
      <div className="contactt">
        <div className="contact-cursive">
          <p>{"<html>"}</p>
          <p>&nbsp;{"<body>"}</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;{"<h1>"}</p>
        </div>
        <div className="contact-title">
          <span className="span1">C</span>
          <span className="span2">o</span>
          <span className="span3">n</span>
          <span className="span4">t</span>
          <span className="span5">a</span>
          <span className="span6">c</span>
          <span className="span7">t </span>
          <span className="span8">m</span>
          <span className="span9">e</span>
        </div>
        <div className="contact-cursive">
          <p>&nbsp;&nbsp;&nbsp;&nbsp;{"</h1>"}</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;{"<p>"}</p>
        </div>
        <div className="contact-p">
          <p>
            If you have any request or question, don't hesitate to use the form.
          </p>
        </div>
        <div className="contact-cursive">
          <p>&nbsp;&nbsp;&nbsp;&nbsp;{"</p>"}</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;{"<form>"}</p>
        </div>
        <form ref={form} className="contact-form">
          <div className="contact-inp">
            <input
              name="user_name"
              type="text"
              placeholder="Name"
              value={formValues.user_name}
              onChange={handleChange}
            />
            <span className={line ? null : "underline"}></span>
            <span className="error">{error.user_name}</span>
          </div>

          <div className="contact-inp">
            <input
              name="user_email"
              type="email"
              placeholder="Email"
              value={formValues.user_email}
              onChange={handleChange}
            />
            <span className={line ? null : "underline"}></span>
            <span className="error">{error.user_email}</span>
          </div>
          <div className="contact-inp">
            <input
              name="user_subject"
              type="text"
              placeholder="Subject"
              value={formValues.user_subject}
              onChange={handleChange}
            />
            <span className={line ? null : "underline"}></span>
            <span className="error">{error.user_subject}</span>
          </div>
          <div className="contact-inp">
            <textarea
              name="message"
              cols="30"
              rows="5"
              placeholder="Message"
              value={formValues.message}
              onChange={handleChange}
            ></textarea>
            <span className={line ? null : "underline"}></span>
            <span className="error">{error.message}</span>
          </div>
          <button onClick={handleSubmit}>Send message!</button>
        </form>
        <div className="contact-cursive">
          <p>&nbsp;&nbsp;&nbsp;&nbsp;{"</form>"}</p>
          <p>&nbsp;{"</body>"}</p>
          <p>{"</html>"}</p>
        </div>
      </div>
      <div className="contact-side">
        <div>
          <IoLocationSharp className="contact-icon" size="50px" />
          <p>Gaindakot-05, Nawalparasi, Nepal</p>
        </div>

        <div>
          <FaEnvelope className="contact-icon" size="50px" />
          <p className="contact-email">{"bhandaribipin3.39@gmail.com"}</p>
        </div>
        <div className="fiverr-div">
          <SiFiverr
            onClick={(e) => {
              e.preventDefault();
              window.open(
                "https://www.fiverr.com/bipinbhandar182/create-responsive-frontend-websites-in-html-css-javascript-reactjs",
                "_blank"
              );
            }}
            className="fiverr"
            size="100px"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
