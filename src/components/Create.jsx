import React, { useContext, useState } from "react";
import { ProductContexts } from '../utils/Contexts';
import { useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";

const Create = () => {
  document.title = "Add Product";

  const navigate = useNavigate();
  const [products, setproducts] = useContext(ProductContexts);
  const [title, settitle] = useState("");
  const [image, setimage] = useState("");
  const [price, setprice] = useState("");
  const [category, setcategory] = useState("");
  const [description, setdescription] = useState("");

  const AddProductHandler = (e) => {
    e.preventDefault();

    if(title.trim().length < 5 || image.trim().length < 5 || price.trim().length < 1 || category.trim().length < 5 || description.trim().length < 5){
      alert("Each field required atleat 4 characters");
      return;
    }    

    const product = {
      id: nanoid(),
      title,
      image,
      price,
      category,
      description,
    };   
    setproducts([...products, product]);
    localStorage.setItem("products", JSON.stringify([...products, product]));
    navigate("/");
  };

  return (
    <form
      onSubmit={AddProductHandler}
      className="flex flex-col items-center p-[5%] pt-[7%] w-screen h-screen"
    >
      <h1 className="text-3xl mb-5 w-1/2 ">Add New Product</h1>

      <input
        type="text"
        placeholder="Image Link"
        className="text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3"
        onChange={(e) => setimage(e.target.value)}
        value={image}
      />

      <input
        type="text"
        placeholder="Title"
        className="text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3"
        onChange={(e) => settitle(e.target.value)}
        value={title}
      />

      <div className="w-1/2 flex justify-between">
        <input
          type="text"
          placeholder="Category"
          className="text-1xl bg-zinc-100 rounded p-3 w-[49%] mb-3"
          onChange={(e) => setcategory(e.target.value)}
          value={category}
        />

        <input
          type="number"
          placeholder="Price"
          className="text-1xl bg-zinc-100 rounded p-3 w-[48%] mb-3"
          onChange={(e) => setprice(e.target.value)}
          value={price}
        />
      </div>

      <textarea
        type="text"
        placeholder="Description"
        rows="8"
        className="text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3"
        onChange={(e) => setdescription(e.target.value)}
        value={description}
      />

      <div className="w-1/2 mt-2">
        <button
          className="px-4 py-2 border rounded border-blue-500 text-blue-500 font-semibold hover:bg-blue-500 hover:text-white "
          href="/create"
        >
          Add product
        </button>
      </div>
    </form>
  );
};

export default Create;
