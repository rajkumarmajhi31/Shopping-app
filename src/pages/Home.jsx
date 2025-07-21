<<<<<<< HEAD
import { useState, useEffect } from "react";
=======
import { useEffect, useState } from "react";
>>>>>>> d3fccb7769defd5c6e3ea0ff361284b7b296a1a8
import Spinner from "../components/Spinner";
import Product from "../components/Product";

const Home = () => {
<<<<<<< HEAD
  const API_URL = "https://dummyjson.com/products";
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  async function fetchProductData() {
    setLoading(true);

    try{
      const res = await fetch(API_URL);
      const data = await res.json();

      setPosts(data.products);
    }
    catch(error) {
      console.log("Error aagya ji");
      setPosts([]);
    }
    setLoading(false);
  }

  useEffect( () => {
    fetchProductData();
  },[])

  return (
    <div>
      {
        loading ? <Spinner />  :
        posts.length > 0 ? 
        (<div className="grid  xs:gridcols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
          {
            posts.map( (post) => (
            <Product key = {post.id} post={post}/>
          ) )
          }
        </div>) :
        <div className="flex justify-center items-center">
          <p>No Data Found</p>
        </div> 
      }
=======
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  async function fetchProductsData() {
    setLoading(true);
    try {
      const output = await fetch(API_URL);
      const data = await output.json();
      console.log(data);
      setProducts(data);
    } catch (err) {
      console.log(err);
      setProducts([]);
    }
    setLoading(false);
  }
// To render for the first render of file only.
  useEffect(() => {
    fetchProductsData();
  }, []);

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : products.length > 0 ? (
        <div className="grid xs:gridcols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div>No Products Found</div>
      )}
>>>>>>> d3fccb7769defd5c6e3ea0ff361284b7b296a1a8
    </div>
  );
};

export default Home;
