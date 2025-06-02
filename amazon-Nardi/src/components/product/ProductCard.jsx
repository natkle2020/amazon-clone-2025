import {useContext}from "react"

import Rating from '@mui/material/Rating';
import CurrencyFormat from '../currencyformat/CurrencyFormat';
import classes from './Product.module.css';
import { Link } from 'react-router-dom';

import{Type} from '../../utility/action.type'
import { DataContext } from "../DataProvider/DataProvider";


function ProductCard({ product,flex ,renderDesc,renderAdd }) {
  const { image, title, id, rating, price,description } = product;

const [state,dispatch]=useContext(DataContext);
console.log(state);


const addToCart = ()=>{
  dispatch({
    type:Type.ADD_TO_BASKET,
    items :{
      image, title, id, rating, price,description }
  })
}

  return (
    <div className={`${classes.card_container} ${flex?classes.product__flexed :  ''} `}>
      <Link to={`/products/${id}`}>
        <img src={image} alt={title} className={classes.img_container} />
      </Link>
      <div>
        <h3>{title}</h3>
        {renderDesc && <div style ={{maxWidth: "500px"}}   >{description}</div>}
        <div className={classes.rating}>
          <Rating value={rating?.rate} precision={0.1}/>
          <small>{rating?.count}</small>
        </div>
        <div>
          <CurrencyFormat amount={price} />
        </div>

{
renderAdd && <button className={classes.button} onClick={addToCart}>Add to cart

</button>
}

 </div>
    </div>
  );
}

export default ProductCard;
