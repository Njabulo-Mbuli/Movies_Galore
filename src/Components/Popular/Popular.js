import React from 'react';
import Carousel from '../Carousel/Carousel'
import '../HomePageCarouselStyling.css';

const Popular= ({popular,showMovie})=>{
    
    return( 
    <div className="Carousel">
      <h2>Popular Movies</h2>
        <a id="top">
        <Carousel
              movieList={popular}
              showMovie={(movieDetail)=>{showMovie(movieDetail)}}/>
              </a>
    </div>
    )
  }

export default Popular;