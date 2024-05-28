import React, { createContext, useEffect, useState } from "react";
import axios from "./axios";

export const ProductContexts = createContext();

const Contexts = (pros) => {
  const [products, setProducts] = useState(JSON.parse(localStorage.getItem("products")) || null);

  const getProducts = async () => {
    try {
        const { data } = await axios("/products");
        setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <ProductContexts.Provider value={[products, setProducts]}>
      {pros.children}
    </ProductContexts.Provider>
  );
};

export default Contexts;
