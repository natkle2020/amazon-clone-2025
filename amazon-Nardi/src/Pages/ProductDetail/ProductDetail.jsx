import React, { useEffect, useState } from 'react'
import classes from './productDetail.module.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { productUrl } from '../../Api/endPoint'
import ProductCard from '../../components/product/ProductCard'
import Loader from '../../components/Loader/Loader'
import Layout from '../../components/LayOut/Layout'


function ProductDetail() {
  
const [product, setProduct] = useState({});
const { productId } = useParams();
const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true); 
    axios
      .get(`${productUrl}/products/${productId}`)
      .then((res) => {
        setProduct(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [productId]);
if(isLoading){
  return <Loader />
}
  return (
    <Layout>
       <ProductCard 
       key={product.id}
        product={product}
        flex ={true}
        renderDesc ={true} 
          renderAdd ={true}/>
   
    
    </Layout>
  );
}

export default ProductDetail;






