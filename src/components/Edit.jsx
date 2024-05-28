import React, { useContext, useEffect, useState } from "react";
import { ProductContexts } from "../utils/Contexts";
import { useNavigate, useParams } from "react-router-dom";

const Edit = () => {
  document.title = "Edit Product";

  const [products, setproducts] = useContext(ProductContexts);
  const [product, setproduct] = useState({
    title: "",
    image: "",
    price: "",
    category: "",
    description: "",
  });
  const { id } = useParams();
  const navigate = useNavigate();

  const ChangeHandler =(e) => {
    // console.log(e.target.name, e.target.value);
    setproduct({...product, [e.target.name]: e.target.value});
  }

  useEffect(() => {
    setproduct(products.filter(p => p.id == id)[0])
  }, [id]);

  const AddedProductHandler = (e) => {
    e.preventDefault();

    if (
      product.title.trim().length < 5 ||
      product.image.trim().length < 5 ||
      product.price.length < 1 ||
      product.category.trim().length < 5 ||
      product.description.trim().length < 5
    ) {
      alert("Each field required atleat 4 characters");
      return;
    }

    //Changing database from product id (pi = product index)
    const pi = products.findIndex(p => p.id == id); 
    const copyData = [...products];
    copyData[pi] = {...products[pi], ...product}   //...products[pi] to copy data of that id which has not been changed
    setproduct(copyData);                          //...product to change the data that we have changed in edit form
    localStorage.setItem("products", JSON.stringify(copyData));
    navigate(-1);
    

    // setproducts([...products, product]);
    // localStorage.setItem("products", JSON.stringify([...products, product]));
    // navigate("/");
  };

  return (
    <form
      onSubmit={AddedProductHandler}
      className="flex flex-col items-center p-[5%] pt-[7%] w-screen h-screen"
    >
      <h1 className="text-3xl mb-5 w-1/2 ">Edit Product</h1>

      <input
        type="text"
        placeholder="Image Link"
        className="text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3"
        name="image"
        onChange={ChangeHandler}
        value={product && product.image}
      />

      <input
        type="text"
        placeholder="Title"
        className="text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3"
        name="title"
        onChange={ChangeHandler}
        value={product && product.title}
      />

      <div className="w-1/2 flex justify-between">
        <input
          type="text"
          placeholder="Category"
          className="text-1xl bg-zinc-100 rounded p-3 w-[49%] mb-3"
          name="category"
        onChange={ChangeHandler}
          value={product && product.category}
        />

        <input
          type="number"
          placeholder="Price"
          className="text-1xl bg-zinc-100 rounded p-3 w-[48%] mb-3"
          name="price"
        onChange={ChangeHandler}
          value={product && product.price}
        />
      </div>

      <textarea
        type="text"
        placeholder="Description"
        rows="8"
        className="text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3"
        name="description"
        onChange={ChangeHandler}
        value={product && product.description}
      />

      <div className="w-1/2 mt-2">
        <button
          className="px-4 py-2 border rounded border-blue-500 text-blue-500 font-semibold hover:bg-blue-500 hover:text-white "
          href="/create"
        >
          Edit product
        </button>
      </div>
    </form>
  );
};

export default Edit;
