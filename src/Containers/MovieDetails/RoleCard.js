import React from 'react';

const RoleCard = (props) =>{
	const runFunctions=()=>{
		props.hideModal();
		props.showMovieDetails(props.id);
	}

	let background_poster= require('../../assets/no_image_found_poster.png');

	return(
		<div
			onClick={()=>runFunctions()} 
			className=" bg-light-green dib shadow-5 grow"
			key={props.id}
			style={{width:"120px",textAlign:"center",color:"black",borderRadius:"5px",backgroundSize:'contain'}}>
			<div 
				className="castCard"
				style={{margin:"0 auto",width:"120px",height:"140px",backgroundImage:`url(https://image.tmdb.org/t/p/w185/${props.poster_path}),url(${background_poster})`,backgroundRepeat:"no-repeat",backgroundSize:'cover'}}>
				
			</div>
			<h4 style={{margin:"0"}}>{props.title}</h4>
			 {props.character?<h5 style={{margin:"0"}}>Plays: {props.character}</h5>:null}
		</div>
	);
}
export default RoleCard;