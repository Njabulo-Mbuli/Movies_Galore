import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import Card from '../Card/Card';

const Upcoming= ({upcoming,showMovie})=>{
  
  const handleOnDragStart=e=>e.preventDefault()
  
  let responsive={
                0:{
                    items: 2
                  },
                600:{
                    items: 4
                  },
                1024:{
                    items: 7
                  },
                };
                
    return( 
    <div>
      <h2>Upcoming Movies</h2>
        <AliceCarousel mouseDragEnabled buttonsDisabled={true}
            autoPlayInterval={2000}
        autoPlayDirection="ltr"
        autoPlay={false}
            responsive={responsive}>
         {
            upcoming.map((movieDetails,i)=>{
               return(<div onDragStart={handleOnDragStart} key={movieDetails.id}>
                          <Card 
                              movieDetails={movieDetails}
                              showMovie={(movieDetail)=>showMovie(movieDetail)}/>
                      </div>);
            })
        }
        </AliceCarousel>
    </div>
    )
  }

export default Upcoming;