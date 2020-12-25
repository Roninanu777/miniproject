import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "./project.css";

const CreateProject = (props) => {
  const { closeModal } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    props.next();
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
            name="title"
            placeholder="Title"
          />
          <textarea
            name="summary"
            required
            placeholder="Description"
          ></textarea>
          <input type="text" placeholder="Upload attachment" />
          <input type="text" required name="date" placeholder="Delivery date" />
          <input type="text" required name="cost" placeholder="Project cost" />
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
          Create project
        </button>
      </form>
    </>
  );
};

export default CreateProject;
