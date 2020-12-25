import React, { useState } from "react";
import Modal from "./components/Modal";
import PurchaseDetails from "./components/PurchaseDetails";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  const [status, setStatus] = useState(false);
  const [loading, setLoading] = useState(true);

  const postData = () => {};

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            {status && <Modal closeModal={() => setStatus(false)} />}
            <div className="container">
              <button id="modal-trigger" onClick={() => setStatus(true)}>
                Open Modal
              </button>
            </div>
          </Route>
          <Route exact path="/purchase-details">
            <PurchaseDetails />
          </Route>
        </Switch>
      </div>
    </Router>
  );
  // return (
  //   <div className="App">
  //     <PurchaseDetails />
  //   </div>
  // );
}

export default App;
