import React, { useContext } from "react";
import { ProductContexts } from "../utils/Contexts";
import { Link } from "react-router-dom";

const Nav = () => {
  const [products] = useContext(ProductContexts);

  let distinct_category =
    products && products.reduce((acc, cv) => [...acc, cv.category], []);
  distinct_category = [...new Set(distinct_category)];
  // console.log(distinct_category);

  const color = () => {
    return `rgba(${(Math.random() * 255).toFixed()}, ${(Math.random() * 255).toFixed()}, ${(Math.random() * 255).toFixed()}, 0.4)`;
  };
  // console.log(color());

  return (
    <nav className="pt-5 w-[14%] h-full bg-[#E6E6E6] flex flex-col items-center">
      
      <Link to="/" className="">
        <img className=" h-25 -mt-3 bg-cover" src="https://img.freepik.com/premium-vector/online-shopping-logo-design-template-digital-shopping-logo-mouse-cursor-cart-concepts_502185-286.jpg?w=1060" alt="" />
      </Link>

      <hr className="w-[80%] " />

      <h1 className="mb-5 w-[80%] font-semibold text-xl">Category Filter</h1>

      <div className="w-[80%]">
        {distinct_category.map((cat, index) => (
          <Link
            key={index}
            to={`/?category=${cat}`}
            className=" flex items-center gap-2 mb-3 capitalize"
          >
            <span style={{backgroundColor: color()}} className="rounded-full w-[15px] h-[15px]">
              {" "}
            </span>
            {cat}
          </Link>
        ))}
      </div>

      <hr className="w-[80%] my-3" />

      <a
        className="px-4 py-2 border rounded border-blue-500 text-blue-500 font-semibold hover:bg-blue-500 hover:text-white "
        href="/create"
      >
        Add new product
      </a>
    </nav>
  );
};

export default Nav;
