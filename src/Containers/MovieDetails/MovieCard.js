import React from 'react';
import './MovieCard.css';
import StarRating from './StarRating.js';
import Genres from './Genres';

const MovieCard = (props) =>{

	
	
	return(
		<div className="Container" style={{width:"80%"}}>
		<div style={{display:"flex",flexFlow:"row"}}>
			<div 
				className="movieCard tc bg-light-green br3 ma2 dib bw2 shadow-5"
				style={{backgroundImage:`url(https://image.tmdb.org/t/p/w185/${props.poster})`,overflow:'hidden',backgroundSize:'contain'}}>
				</div>
			<div>
			<h1 style={{padding:"0.1em",margin:"0.1em"}}>{props.title}</h1>
			<div style={{display:"flex",flexFlow:"row",alignItems:"center",padding:"0.1em",margin:"0.1"}}>
				<StarRating
					rating={props.rating}
					vote_count={props.vote_count}/>
			</div>
			<Genres 
					genres={props.genres}/>
			</div>
		</div>
		<h3>Movie Overview:</h3>
		<p>{props.overview}</p>
		</div>
	);
}

export default MovieCard;