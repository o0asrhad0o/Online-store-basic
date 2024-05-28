import React, { useContext, useEffect, useState } from "react";
import Nav from "./Nav";
import { Link, useLocation } from "react-router-dom";
import { ProductContexts } from "../utils/Contexts";
import Loading from "./Loading";
import axios from "../utils/axios";

const Home = () => {
  const [products] = useContext(ProductContexts);
  const { search } = useLocation();
  const category = decodeURIComponent(search.split("=")[1]); //to get clean category name from url

  const [filteredProducts, setfilteredProducts] = useState(null);

  // const getProductsByCategory = async () => {
  //   try {
  //     const { data } = await axios.get(`/products/category/${category}`);
  //     setfilteredProducts(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    // console.log(category);
    if (!filteredProducts || category === "undefined") setfilteredProducts(products);
    if (category != "undefined") {
    setfilteredProducts(products.filter(p => p.category === category));
      // getProductsByCategory()
    };
  }, [category, products]);

  return products ? (
    <>
      <Nav />

      <div className="w-[86%] p-8 pt-20 flex flex-wrap overflow-x-hidden overflow-y-auto gap-4">

        {filteredProducts && filteredProducts.map((item, index) => (
          <Link
            key={item.id}
            to={`/details/${item.id}`}
            className="card p-4 w-[18%] h-[35vh] hover:scale-110 transition-all border shadow rounded flex flex-col justify-center items-center flex-nowrap"
          >
            <div
              className="mb-3 w-full h-[80%] bg-contain bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${item.image})` }}
            ></div>
            <h1 className="text-center hover:text-blue-500 cursor-pointer">
              {item.title}
            </h1>
          </Link>
        ))}
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default Home;
