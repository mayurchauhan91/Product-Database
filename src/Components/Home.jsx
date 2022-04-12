import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./common.css";
import Header from "./Header";
import Tasks from "./Tasks";
import UseFetch from "./UseFetch";

const Home = () => {
  const [products, setProducts] = useState([]);
  const { data: tasks } = UseFetch("http://localhost:5000/products");

  // Fetch Data

  const fetchProducts = async () => {
    const res = await fetch("http://localhost:5000/products");
    const data = await res.json(tasks);
    return data;
  };
  // Get Data

  useEffect(() => {
    const getProducts = async () => {
      const productsFromServer = await fetchProducts();
      setProducts(productsFromServer);
    };
    getProducts();
  }, []);

  // Delete Task

  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/products/${id}`, {
      method: "DELETE",
    });
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <div>
      <Header />
      {products.length > 0 ? (
        <Tasks tasks={products} onDelete={deleteTask} />
      ) : (
        "Start adding product by clicking Add Product."
      )}
    </div>
  );
};

export default Home;
