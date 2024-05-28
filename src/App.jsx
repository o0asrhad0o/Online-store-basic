import React from "react";
import Home from "./components/Home";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import Details from "./components/Details";
import Create from "./components/Create";
import Edit from "./components/Edit";

const App = () => {
  const { search, pathname } = useLocation();

  return (
    <div className="h-screen w-screen flex ">
      
      {/* Will only show on homepage
      {pathname == "/" && search.length == 0 && (
        <Link className="text-xl font-semibold absolute left-[17%] top-[5%]">
          All Products
        </Link>
      )} */}

      {/* Will not be shown on home page */}
      {(pathname != "/" || search.length > 0) && (
        <Link
          to="/"
          className="text-md font-semibold absolute left-[17%] top-[5%] hover:text-red-600"
        >
          Home
        </Link>
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </div>
  );
};

export default App;
