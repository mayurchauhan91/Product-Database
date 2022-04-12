import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UseFetch from "./UseFetch";
import { useParams } from "react-router";
import "./common.css";

//AddData function to add a new record to database
const EditData = () => {
  // Setting up variable to change as per state
  const [product, setProduct] = useState("");
  const [price, setPrice] = useState("");
  const [currency, setCurrency] = useState();
  const { id } = useParams();
  const { data } = UseFetch("http://localhost:5000/products/" + id);

  const navigate = useNavigate();
  //Changing name variable on change
  const onInputNameChangeHandler = (e) => {
    setProduct(e.target.value);
  };

  //Changing price variable on change
  const onInputPriceChangeHandler = (e) => {
    setPrice(e.target.value);
  };

  //Changing currency variable on change
  const onInputCurrencyChangeHandler = (e) => {
    setCurrency(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const newItem = {
      id: id,
      product: product,
      price: price,
      currency: currency,
    };
    await fetch(`http://localhost:5000/products/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newItem),
    }).then(() => {
      console.log(newItem);
      navigate("/");
    });
  };

  return (
    <div>
      {data && (
        <form onSubmit={onSubmit}>
          <div>
            <label>Update Product</label>
            <div>
              <Link to="/">
                <button className="back-btn">CANCEL</button>
              </Link>
            </div>
            <label>Product:</label>
            <input
              type="text"
              placeholder="Macbook"
              name="name"
              defaultValue={data.product}
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
              defaultValue={data.price}
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
              defaultValue={data.currency}
              placeholder="GBP"
              required
              onChange={onInputCurrencyChangeHandler}
            />
            <br />
          </div>

          <button type="submit" value="Submit" className="blue-btn">
            Update
          </button>
        </form>
      )}
    </div>
  );
};

export default EditData;
