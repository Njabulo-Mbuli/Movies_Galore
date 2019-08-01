import React from 'react';
import './MovieCard.css';
import StarRating from './StarRating.js';
import Genres from './Genres';

const MovieCard = (props) =>{

	let backup_poster=require("../../assets/no_image_found_poster.png");
	
	return(
		<div className="Container" style={{width:"75vw"}}>
		<div style={{display:"flex",flexFlow:"row"}}>
			<div 
				className="movieCard tc bg-light-green br3 ma2 dib bw2 shadow-5"
				style={{backgroundRepeat:"no-repeat",backgrounPosition:"center",backgroundSize:"cover",backgroundImage:`url(https://image.tmdb.org/t/p/w185/${props.poster}),url(${backup_poster})`,overflow:'hidden'}}>
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
		{props.overview?
			<p>{props.overview}</p>:
			<div className="blocked_section" style={{padding:"0.5em", textAlign:"center",display:"flex",justifyContent:"center",alignItems:"center",width:"100%", minHeight:"15vh", backgroundColor:"rgba(15,25,67,0.5)"}}>
				<h4>There hasn't been an overview added for this movie...</h4>
			</div>
			}
		</div>
	);
}

export default MovieCard;