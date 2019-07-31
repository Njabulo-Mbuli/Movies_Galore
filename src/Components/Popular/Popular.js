import React from 'react';
import Carousel from '../Carousel/Carousel'
import '../HomePageCarouselStyling.css';

const Popular= ({popular,showMovie})=>{
    
    return( 
    <div className="Carousel">
      
      <h2>Popular Movies</h2>
        
        <Carousel
              movieList={popular}
              showMovie={(movieDetail)=>{showMovie(movieDetail)}}/>
              
    </div>
    )
  }

export default Popular;