import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Productmodulecss from './Product.module.css';
import ProductCard from './ProductCard';
import "../../index.css";
import Loader from '../Loader/Loader';

function Product() {
const [product,setProducts ]=useState([]);
const [isLoading,setisLoading]=useState(false)
useEffect(()=>{
    axios.get('https://fakestoreapi.com/products')
    .then((res)=>{
        // console.log(res)
        setProducts(res.data);
        setisLoading(false)
 })
 .catch((err)=>{
    console.log(err);
    setisLoading(false)
    });

},[]);
return (
    <>
    {
        isLoading ? <Loader /> : 
            <section  className={Productmodulecss.container} >
    {product.map((SingleProduct)=>( <ProductCard  renderAdd={true}product ={SingleProduct}  key={SingleProduct.id}/>
    ))}
</section>
    }
  </>
  );
}

export default Product