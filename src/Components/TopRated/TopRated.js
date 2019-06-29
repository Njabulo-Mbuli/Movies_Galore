import React from 'react';
import ReactDOM from 'react-dom';
import Coverflow from 'react-coverflow';
import Card from '../Card/Card';


const TopRated=({toprated})=>{
  
    return( 
    <div>
      <h2>Top Rated Movies</h2>
      <div className="swiper-wrapper">  
      
        {
            toprated.map((movieDetails,i)=>{
               return( <Card key={movieDetails.movie_id}
                      movieDetails={movieDetails}/>)
            })
        }
      </div>
    </div>
    )
  }

export default TopRated;