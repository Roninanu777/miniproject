import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "./project.css";
import axios from "axios";

// Custorm form validator
const validator = (name, value) => {
  if (name == "name") {
    if (value.length > 80) {
      return true;
    } else {
      return false;
    }
  } else if (name == "summary") {
    if (value.length > 200) {
      return true;
    } else {
      return false;
    }
  } else if (name == "date") {
    let now = new Date().toLocaleDateString("en-CA");
    if (value < now) {
      return true;
    } else {
      return false;
    }
  } else if (name == "cost") {
    if (parseFloat(value) < 100 || parseFloat(value) > 100000) {
      return true;
    } else {
      return false;
    }
  }
};
//---------------------------------------------------------------

const CreateProject = (props) => {
  const { closeModal } = props;
  const [options, setOptions] = useState({
    name: "",
    summary: "",
    date: "",
    cost: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({
    name: false,
    summary: false,
    date: false,
    cost: false,
    flag: false,
  });

  // Submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!error.flag) {
      setLoading(true);
      axios
        .post(`${process.env.REACT_APP_BASE_URL}/project`, { ...options })
        .then((response) => {
          setLoading(false);
          props.next();
        })
        .catch((err) => console.log(err));
    }
  };

  // Onchange handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    let err = validator(name, value);
    if (err) {
      setError((prev) => ({ ...prev, [name]: true, flag: true }));
    } else {
      setError((prev) => ({ ...prev, [name]: false, flag: false }));
      setOptions((prevState) => ({ ...prevState, [name]: value }));
    }
  };

  // Total cost calculator
  const total = () => {
    let c = parseFloat(options.cost);
    return c + c * 0.2;
  };

  return (
    <>
      <div className="head">
        <h4 className="title">Create project</h4>
        <FontAwesomeIcon
          icon={faTimes}
          onClick={closeModal}
          className="close"
        />
      </div>
      <hr
        style={{
          borderTop: "1px solid #dddddd",
        }}
      />
      <form type="submit" onSubmit={handleSubmit} className="form-container">
        <div className="details">
          <input
            type="text"
            autoFocus
            required
            onChange={handleChange}
            name="name"
            placeholder="Title"
          />
          {error.name ? (
            <small className="error">*Characters exceedeed!</small>
          ) : null}
          <textarea
            name="summary"
            required
            onChange={handleChange}
            placeholder="Description"
          ></textarea>
          {error.summary ? (
            <small className="error">*Characters exceeded!</small>
          ) : null}
          <input type="text" disabled placeholder="Upload attachment" />
          <input
            onChange={handleChange}
            required
            name="date"
            type="date"
            placeholder="Delivery date"
          />
          {error.date ? (
            <small className="error">*Select only future dates</small>
          ) : null}
          <input
            type="text"
            onChange={handleChange}
            required
            name="cost"
            placeholder="Project cost"
          />
          {error.cost ? (
            <small className="error">*Enter from $100 - $100000</small>
          ) : null}
        </div>
        <div className="addinfo">
          <div className="fee">
            <p>CleverX transaction fees (20%)</p>
            <span className="cost">
              $
              {parseInt(options.cost) > 0
                ? (parseFloat(options.cost) * 0.2).toFixed(2)
                : "0.00"}
            </span>
          </div>
          <div className="fee">
            <p>Total amount in $USD</p>
            <span className="cost">
              ${parseInt(options.cost) > 0 ? total().toFixed(2) : "0.00"}
            </span>
          </div>
        </div>
        <button id="projectBtn" type="submit">
          {loading ? "Creating..." : "Create Project"}
        </button>
      </form>
    </>
  );
};

export default CreateProject;
