import React, { useState, useEffect } from 'react'
import LayOut from '../../components/LayOut/Layout'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import classes from "../Results/Result.module.css";
import {productUrl} from '../../Api/endPoint'
import ProductCard from '../../components/product/ProductCard';

function Results() {
  const[results, setResults] =useState([])
  const[isloading,setIsLoading]=useState(false)
  const {categoryName} = useParams()
  useEffect(() => {
    setIsLoading(true)
  axios.get(`${productUrl}/products/category/${categoryName}`)
  .then((res) => {
    setResults(res.data)
    setIsLoading(false)
  })
  .catch((err) => {
    console.log(err)})
    setIsLoading(false)
  },[categoryName])
 
  return (
    <LayOut>
      <section>
        <h1 style={{padding: '30px'}}>Results</h1>
        <p style={{padding: '30px'}}>Category/{categoryName}</p>
        <hr />
        {isloading?(<Loader/>):(
        <div className={classes.products_container}>
          {results?.map((product)=>(<ProductCard 
          key={product.id}
          product={product}
          renderDesc={false}
          renderAdd={true} 
          
          />)
)}
 </div>

)}
</section>
    
    </LayOut>
  );
}

export default Results