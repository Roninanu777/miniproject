import React, { useState } from "react";
import "./payment.css";
import Card from "./Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faTimes,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

let cards = [
  { id: 0, selected: true, endnum: 2345 },
  { id: 1, selected: false, endnum: 7645 },
];

const Payment = (props) => {
  const { closeModal } = props;
  const [focus, setFocus] = useState([...cards]);

  const handleClick = (item) => {
    let arr = [...focus];
    arr.forEach((ele) => {
      if (ele.id === item.id) {
        ele.selected = true;
      } else {
        ele.selected = false;
      }
    });
    setFocus([...arr]);
  };

  return (
    <>
      <div className="main">
        <FontAwesomeIcon
          color="#555df2"
          style={{ fontSize: "1.6rem" }}
          icon={faArrowLeft}
        />
        <h4 className="title">Choose card</h4>
        <FontAwesomeIcon icon={faTimes} onClick={closeModal} className="off" />
      </div>
      <hr
        style={{
          borderTop: "1px solid #dddddd",
        }}
      />
      <form type="submit" className="form-container">
        {focus.map((item) => {
          return (
            <Card
              selected={item.selected}
              endnum={item.endnum}
              focusthis={() => handleClick(item)}
              key={item.id}
            />
          );
        })}
        <div className="addCard">
          <div className="add">
            <FontAwesomeIcon icon={faPlus} color="#b4b4b4" />
            <p>Add card </p>
          </div>
        </div>
        <button id="payBtn" type="submit">
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to="/purchase-details"
          >
            Pay
          </Link>
        </button>
      </form>
    </>
  );
};

export default Payment;
