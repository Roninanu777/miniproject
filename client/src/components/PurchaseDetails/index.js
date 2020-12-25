import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileAlt,
  faCalendarAlt,
  faFolder,
} from "@fortawesome/free-regular-svg-icons";
import "./purchase.css";

const PurchaseDetails = (props) => {
  return (
    <section className="purchase-container">
      <div className="prequest">
        <FontAwesomeIcon
          style={{ fontSize: "1.3rem" }}
          icon={faFileAlt}
          color="#63d463"
        />
        <p>Your project request</p>
      </div>
      <div className="cost-block">
        <p className="quote">I'll be your business expert</p>
        <div className="cost-info">
          <span>$20</span>
          <p>Total : $24</p>
          <p>(CleverX fee + 20%)</p>
        </div>
      </div>
      <div className="msg">
        <p>
          Instead of the typical seamless color transitions that you see in
          gradient.
        </p>
      </div>
      <div className="order-details">
        <div className="order">
          <FontAwesomeIcon
            icon={faCalendarAlt}
            style={{ fontSize: "1.3rem" }}
            color="#2342f1"
          />
          <p>2 day delivery</p>
        </div>
        <div className="order">
          <FontAwesomeIcon
            icon={faFolder}
            style={{ fontSize: "1.3rem" }}
            color="#2342f1"
          />
          <p>Attachment</p>
        </div>
      </div>
      <div className="cancelBtn">
        <button id="cancelBtn">Cancel</button>
      </div>
    </section>
  );
};

export default PurchaseDetails;
