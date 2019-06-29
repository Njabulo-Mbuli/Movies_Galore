import React from 'react';
import ReactDOM from 'react-dom';
import Coverflow from 'react-coverflow';
import Card from '../Card/Card';


const TopRated=({toprated})=>{
  console.log(toprated[0]);
  
    return( 
    <div>
      <h2>Top Rated Movies</h2>
      <div style={{display:'flex'}}>  
      
        {

            toprated.map((movieDetails,i)=>{
               return( <Card key={i}
                      movieDetails={toprated[i]}/>)
            }
            )
        }
      </div>
    </div>
    )
  }

export default TopRated;