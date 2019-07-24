import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import Card from '../Card/Card';

const Popular= ({popular,showMovie})=>{
  
  const handleOnDragStart=e=>e.preventDefault()
  
  let responsive={
              0:{
                  items: 2
                },
              600:
                {
                  items: 4
                },
              1024:{
                  items: 7
                },
              };
    
    return( 
    <div>
      <h2>Popular Movies</h2>
        <a id="top">
        <AliceCarousel mouseDragEnabled buttonsDisabled={true}
            autoPlayInterval={2000}
        autoPlayDirection="ltr"
        autoPlay={false}
            responsive={responsive}>
         {
            popular.map((movieDetails,i)=>{
               return(<div onDragStart={handleOnDragStart} key={movieDetails.id}>
                          <Card 
                              movieDetails={movieDetails}
                              showMovie={(movieDetail)=>showMovie(movieDetail)}/>
                      </div>);
            })
        }
        </AliceCarousel></a>
    </div>
    )
  }

export default Popular;