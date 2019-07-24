import React from 'react';
import './CardStyling.css';

const Card = ({movieDetails,showMovie}) =>{
	return(
		<div className="grow pointer moviecard" onClick={()=>showMovie(movieDetails)}>
		
			<div 
				className="tc bg-light-green br3 ma2 dib bw2 shadow-5 movieCardContent"
				style={{backgroundImage:`url(https://image.tmdb.org/t/p/w185/${movieDetails.poster_path})`,
						overflow:'hidden',backgroundSize:'contain'}}>
						<div className="rating">
				<div>
		            <svg className="rating__icon"  style={{width:'80', height:'30'}}>
		            	<path d="M57.5,12.5h-8.5l6.8,5-2.6,8.1,6.8-5,6.8,5-2.6-8.1,6.8-5h-8.5l-2.6-8.1z" fill="#ffd83d" stroke="#eac328"/>
		            </svg>  
		        </div>
		        
		        <p style={{color:'white'}}>
		        	<strong>
		        		{movieDetails.vote_average}
		        	</strong>
		        </p>

		        </div>
			</div>	
			<h4 style={{marginTop:'-0.4em'}}>{movieDetails.title}</h4>
		</div>
		
		);
}

export default Card;