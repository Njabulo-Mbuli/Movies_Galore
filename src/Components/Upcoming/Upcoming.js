import React from 'react';
import Carousel from '../Carousel/Carousel'

const Upcoming= ({upcoming,showMovie})=>{
                
    return( 
    <div>
      <h2>Upcoming Movies</h2>
        <Carousel
              movieList={upcoming}
              showMovie={(movieDetail)=>{showMovie(movieDetail)}}/>
    </div>
    )
  }

export default Upcoming;