import React from 'react';
import {CategoryInfos } from './CategoryFullInfos';
import CategoryCard from './CategoryCard';
import classes from './CategoryCard.module.css';

function Category() {
    return (
      <section className={classes.catagory_container}>
  {CategoryInfos.map((items,index )=>(
      <CategoryCard key={index} data ={items}/>
  
))}
  </section>
  );
  }
  
  export default Category