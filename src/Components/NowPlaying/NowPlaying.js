import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Carousel from '../Carousel/Carousel';
import Card from '../Card/Card';

const NowPlaying= ({nowPlaying,showMovie})=>{
  
  const handleOnDragStart=e=>e.preventDefault()
  
    return( 
    <div>
      <h2>Movies Playing Now</h2>
        <Carousel
              movieList={nowPlaying}
              showMovie={(movieDetail)=>{showMovie(movieDetail)}}/>
    </div>
    )
  }

export default NowPlaying;