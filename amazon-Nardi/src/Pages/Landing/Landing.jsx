import React from 'react';
import LayOut from '../../components/LayOut/Layout';
import Carousel from '../../components/carousel/CarouselEffect'
import Category from '../../components/Category/Category';
import Product from '../../components/product/Product';

function Landing() {
  return (
    <LayOut>
<Carousel/>
<Category/>
<Product/>

</LayOut>
  )
};

export default Landing