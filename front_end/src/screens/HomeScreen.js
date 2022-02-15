import React, { useEffect, useState } from "react";
// import data from "../data";
import Product from "../components/Product";
import axios from "axios";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import {useDispatch, useSelector} from 'react-redux';
import { listProducts } from "../actions/productActions";
function HomeScreen() {
  // const [products, setProducts] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(false);
  const productList=useSelector((state)=>state.productList);
  const {loading,error,products} =productList;
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(listProducts());
  },[]);

  //wen fetching from data.json
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       setLoading(true);
  //       // const  {data}  = await axios.get("/api/products");
  //       const data= await fetch('/api/products');
  //       const jsonData=await data.json();
  //       setLoading(false);
  //       // setProducts(data);
  //       setProducts(jsonData);

  //     } catch (err) {
  //       setError(err.message);
  //       setLoading(false);
  //     }
  //   };
  //   fetchData();
    // axios.get('/api/products').then(resp => {
    //   setProducts(resp.data)

    // });
  // }, []);
  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant='danger'>{error}</MessageBox>
      ) : (
        <div className="row center">
          {products.map((product) => (
            <Product key={product._id} product={product}></Product>
          ))}
        </div>
      )}
    </div>
  );
}

export default HomeScreen;
