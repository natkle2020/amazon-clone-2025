import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { img } from './img/data';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import classes from './carousel.module.css'
const CarouselEffect = () => {
  return (
    <div>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={true}
        showThumbs={false}
      >
        {img.map((imageItemsLink, index) => (
          <div key={index}>
            <img src={imageItemsLink} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Carousel>
      <div className={classes.hero_img}></div>
    </div>
  );
};

export default CarouselEffect;
