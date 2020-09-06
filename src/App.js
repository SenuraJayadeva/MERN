import React from "react";
import logo from "./logo.svg";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/navbar.component";
import DiscountsList from "./components/Discount-list.component";
import EditDiscount from "./components/edit-Discount.component";
import CreateDiscount from "./components/create-Discount.component";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route path="/" exact component={DiscountsList} />
        <Route path="/edit/:id" component={EditDiscount} />
        <Route path="/create" component={CreateDiscount} />
      </div>
    </Router>
  );
}

export default App;
