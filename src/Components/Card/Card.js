import React from 'react';

const Card = ({movieDetails}) =>{
	console.log();

	return(
		<div className="grow pointer">
		 {
		 //I intentionaly sabotaged this link for the poster by taking out the "t" from "tmdb" to save data  when testing
		}
		<div className="tc bg-light-green br3 pa3 ma2 dib bw2 shadow-5" style={{width:'10em',height:'15em', fontSize:'0.7em',backgroundImage:`url(https://image.mdb.org/t/p/w185/${movieDetails.poster_path})`,backgroundSize:'contain'}}>
			
		</div>	
			<h4 style={{marginTop:'-0.4em'}}>{movieDetails.title}</h4>
			<h6 style={{marginTop:'-1.6em'}}>Hi</h6>
			</div>
		
		);
}

export default Card;