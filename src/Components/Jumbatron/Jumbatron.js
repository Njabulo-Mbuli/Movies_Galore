import React from 'react';
import './Jumbatron.css';

const Jumbatron = ({backdrop}) =>{

	let background=`https://image.tmdb.org/t/p/original/${backdrop}`;

	return(
		<div className="jumbatron" style={{backgroundImage:`url(${background})`}}>
			<div className="jumbatron_container">
			<div className="container tc">
			  <div className="neon">Movie</div>
			  <div className="flux">Club</div>
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