import React from 'react';
import './Backdrop.css';

const Backdrop =(props)=>{
	
	return(
		<div className="Back_Drop" style={{height:"90vh",backgroundImage:`url(https://image.tmdb.org/t/p/original/${props.backdrop_path})`}}>

		</div>
	);
}

export default Backdrop;