import React from 'react';
import Carousel from '../Carousel/Carousel';
import '../HomePageCarouselStyling.css';

const NowPlaying= ({nowPlaying,showMovie})=>{
  
    return( 
    <div className="Carousel">
      <h2>Movies Playing Now</h2>
        <Carousel
              movieList={nowPlaying}
              showMovie={(movieDetail)=>{showMovie(movieDetail)}}/>
    </div>
    )
  }

export default NowPlaying;