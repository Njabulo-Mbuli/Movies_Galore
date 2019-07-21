import React from 'react';
import Search from '../Search/Search';
import './Jumbatron.css';

const Jumbatron = ({backdrop}) =>{

	let background=`https://image.tmdb.org/t/p/original/${backdrop}`;

	return(
		<div className="jumbatron" style={{backgroundImage:`url(${background})`, backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"}}>
			<div className="jumbatron_container">
			<div className="container tc">
			  <div className="neon">Movie</div>
			  <div className="flux">Club</div>
			</div>
			<h3>Need something to watch...?</h3>

				<a class="fa fa-arrow-down fa-2x" href="#top" style={{display:"flex",justifyContent:"center"}}>
					<div class="arrow-down bounce">
					</div>
				</a>
			</div>
		</div>
		);
}

export default Jumbatron;