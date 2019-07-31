import React from 'react';
import './Jumbatron.css';

const Jumbatron = ({backdrop}) =>{

	let background=`https://image.tmdb.org/t/p/original/${backdrop}`;
	let backup_background=require("../../assets/no_image_found.png");
	
	return(
		<div className="jumbatron" style={{backgroundImage:`url(${background}),url(${backup_background})`}}>
			<div className="jumbatron_container">
			<div className="container tc">
			  <div className="main_title">Movie</div>
			  <div className="main_title">Club</div>
			</div>
				<a  href="#top" style={{display:"flex",justifyContent:"center"}}>
					<div className="arrow-down bounce">
					</div>
				</a>
			</div>
		</div>
		);
}

export default Jumbatron;