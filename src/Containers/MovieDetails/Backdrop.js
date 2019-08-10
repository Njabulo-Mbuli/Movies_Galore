import React from 'react';
import './Backdrop.css';

const Backdrop =(props)=>{
	let backup_background=require("../../assets/no_image_found.png");
	
	return(
		<div className="Back_Drop" style={{backgroundImage:`url(https://image.tmdb.org/t/p/original/${props.backdrop_path}),url(${backup_background}`}}>
			<div style={{margin:"0",padding:"1em",textAlign:"center"}}>{props.tagline?<h4 style={{textShadow: "2px 2px 3px #000000"}}>{props.tagline}</h4>:null}</div>
		</div>
	);
}

export default Backdrop;