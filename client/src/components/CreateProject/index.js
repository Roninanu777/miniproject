import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "./project.css";
import axios from "axios";

const CreateProject = (props) => {
  const { closeModal } = props;
  const [options, setOptions] = useState({
    name: "",
    summary: "",
    date: "",
    cost: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post(`${process.env.REACT_APP_BASE_URL}/project`, { ...options })
      .then((response) => {
        setLoading(false);
        props.next();
      })
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOptions((prevState) => ({ ...prevState, [name]: value }));
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
          <textarea
            name="summary"
            required
            onChange={handleChange}
            placeholder="Description"
          ></textarea>
          <input type="text" disabled placeholder="Upload attachment" />
          <input
            type="text"
            onChange={handleChange}
            required
            name="date"
            placeholder="Delivery date"
          />
          <input
            type="text"
            onChange={handleChange}
            required
            name="cost"
            placeholder="Project cost"
          />
        </div>
        <div className="addinfo">
          <div className="fee">
            <p>CleverX transaction fees (20%)</p>
            <span className="cost">$0.00</span>
          </div>
          <div className="fee">
            <p>Total amount in $USD</p>
            <span className="cost">$0.00</span>
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
