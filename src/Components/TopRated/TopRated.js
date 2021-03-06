import React from 'react';
import Carousel from '../Carousel/Carousel';
import '../HomePageCarouselStyling.css';

const TopRated= ({toprated,showMovie})=>{

    return( 
    <div className="Carousel">
      <h2>Top Rated Movies</h2>
        <Carousel
              movieList={toprated}
              showMovie={(movieDetail)=>{showMovie(movieDetail)}}/>
    </div>
    )
  }

export default TopRated;