import React, { useState } from "react";
import Modal from "./components/Modal";
import PurchaseDetails from "./components/PurchaseDetails";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  const [status, setStatus] = useState(false);

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
          //Not a protected route right now
          <Route exact path="/purchase-details">
            <PurchaseDetails />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
