
import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

import Card from '../Card/Card';

const TopRated= ({toprated})=>{
  const handleOnDragStart=e=>e.preventDefault()
  let responsive={0: { items: 2 },600:{items:4} ,1024: { items: 6 }, };

    return( 
    <div>
      <h2>Top Rated Movies</h2>
        <AliceCarousel mouseDragEnabled buttonsDisabled={true}
            itemsInSlide={5}
            autoPlayInterval={2000}
        autoPlayDirection="rtl"
        autoPlay={true}
            responsive={responsive}>
         {
            toprated.map((movieDetails,i)=>{
               return(<div onDragStart={handleOnDragStart} key={movieDetails.id}>
                          <Card movieDetails={movieDetails}/>
                      </div>);
            })
        }
        </AliceCarousel>
    </div>
    )
  }

export default TopRated;