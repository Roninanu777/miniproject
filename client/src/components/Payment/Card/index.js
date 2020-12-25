import React from "react";
import "./card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
const Card = (props) => {
  return (
    <div
      className="card"
      onClick={props.focusthis}
      style={{
        border: props.selected ? "2px solid #555df2" : "2px solid #e1e1e1",
      }}
    >
      <div className="check">
        <FontAwesomeIcon
          icon={faCheckCircle}
          style={{ fontSize: "20px" }}
          color={props.selected ? "#63d463" : "transparent"}
        />
        <div className="visa">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Visa.svg/1280px-Visa.svg.png"
            alt="visa"
          />
        </div>
      </div>
      <p>{`Visa credit card ending with ${props.endnum}`}</p>
    </div>
  );
};

export default Card;
