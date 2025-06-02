import React from 'react';
import classes from './CategoryCard.module.css';
import{Link} from 'react-router-dom'
function CategoryCard({ data }) {
  return (
    <div className={classes.categoryCard}>
      <Link to ={`/category/${data.name}`}>
        <div className={classes.imageContainer}>
          <img src={data.imgLink} alt={data.title} />
        </div>
        <div className={classes.title}>
          <h2>{data.title}</h2>
        </div>
        <p className={classes.shopNow}>Shop now</p>
      </Link>
    </div>
  );
}

export default CategoryCard;
