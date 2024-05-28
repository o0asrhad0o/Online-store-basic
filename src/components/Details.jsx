import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Loading from "./Loading";
import { ProductContexts } from "../utils/Contexts";

const Details = () => {
  const [products, setproducts] = useContext(ProductContexts);
  const [product, setproduct] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  // console.log(id);

  // async function getsingleproduct() {
  //   try {
  //     const { data } = await axios.get(`/products/${id}`);
  //     setproduct(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  useEffect(() => {
    if(!product){
      setproduct(products.filter(p => p.id == id)[0]);
    }
    // getsingleproduct();
  }, []);

  const ProductDeleteHandler = (id) => {
    const FilteredProducts = products.filter(p => p.id !== id);
    setproducts(FilteredProducts);
    localStorage.setItem('products', JSON.stringify(FilteredProducts));
    navigate("/");
  }

  return product ? (
    <div className="w-screen h-screen px-40 py-40 flex justify-between">
      <img className="w-[50%] object-contain" src={`${product.image}`} alt="" />
      <div className="w-[50%] flex flex-col justify-center gap-4">
        <h1 className="text-4xl font-bold">{product.title}</h1>
        <h3 className="text-lg text-zinc-500 capitalize">{product.category}</h3>
        <h2 className="text-lg font-semibold">$ {product.price}</h2>
        <p className="text-lg w-[80%]">{product.description}</p>

        <div className="flex gap-5">
          <Link to={`/edit/${product.id}`} className="px-5 py-2 rounded-md border font-semibold border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all">
            Edit
          </Link>
          <button onClick={() => ProductDeleteHandler(product.id)} className="px-5 py-2 rounded-md border border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-all">
            Delete
          </button >
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Details;
