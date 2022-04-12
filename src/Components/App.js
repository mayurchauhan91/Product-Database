import React from "react";
import "./common.css";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddData from "./AddData";
import ProductDetails from "./ProductDetails";
import EditData from "./EditData";
import NotFound from "./NotFound";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/AddData" element={<AddData />} />
          <Route path="/EditData/:id" element={<EditData />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
