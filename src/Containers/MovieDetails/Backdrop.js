import React from 'react';
import './Backdrop.css';

const Backdrop =(props)=>{
	
	return(
		<div className="Back_Drop" style={{height:"90vh",
		backgroundImage:`url(https://image.tmdb.org/t/p/original/${props.backdrop_path})`,
			display:"flex",alignItems:"center",justifyContent:"center"}}>
			<div style={{margin:"0"}}>{props.tagline?<h3 style={{textShadow: "2px 2px 3px #000000"}}>{props.tagline}</h3>:null}</div>
		</div>
	);
}

export default Backdrop;