import React from "react";
import { useState } from "react";
import "./common.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

//AddData function to add a new record to database
const AddData = () => {
  // Setting up variable to change as per state
  const [product, setproduct] = useState("");
  const [price, setPrice] = useState("");
  const [currency, setCurrency] = useState();
  const navigate = useNavigate();

  //Changing name variable on change
  const onInputNameChangeHandler = (e) => {
    setproduct(e.target.value);
  };

  //Changing price variable on change
  const onInputPriceChangeHandler = (e) => {
    setPrice(e.target.value);
  };

  //Changing currency variable on change
  const onInputCurrencyChangeHandler = (e) => {
    setCurrency(e.target.value);
  };
  //Add Task
  const onSubmit = async (e) => {
    e.preventDefault();
    const item = {
      product: product,
      price: price,
      currency: currency,
    };
    await fetch("http://localhost:5000/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(item),
    }).then(() => {
      console.log("new Blog Added");
      navigate("/");
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>Add Product</label>
        <Link to="/">
          <button className="back-btn">CANCEL</button>
        </Link>
        <label>Product:</label>
        <input
          type="text"
          placeholder="Macbook"
          name="name"
          product={product}
          required
          pattern="[A-Z a-z]*"
          className="inputField"
          maxLength="30"
          onChange={onInputNameChangeHandler}
        />
        <br />
        <label>Price:</label>
        <input
          type="number"
          placeholder="999.99"
          name="price"
          price={price}
          required
          min="0.01"
          max="1000000.00"
          step="0.01"
          className="inputField"
          maxLength="30"
          onChange={onInputPriceChangeHandler}
        />
        <br />
        <label className="label">Currency:</label>
        <input
          type="text"
          pattern="[A-Za-z]*"
          className="inputField"
          name="currency"
          currency={currency}
          placeholder="GBP"
          required
          onChange={onInputCurrencyChangeHandler}
        />
        <br />
      </div>

      <button type="submit" value="Submit" className="blue-btn">
        SUBMIT
      </button>
    </form>
  );
};

export default AddData;
