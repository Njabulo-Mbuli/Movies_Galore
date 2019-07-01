import React from 'react';

const Jumbatron = ({backdrop}) =>{
	console.log("Looking for backdtop ",backdrop);
	let background=`https://image.tmdb.org/t/p/original/${backdrop}`;
	return(
		<div className="jumbatron" style={{backgroundImage:`url(${background})`, backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"}}>
			<div className="jumbatron_container">
			<div className="container tc">
			  <div className="neon">Movies </div>
			  <div className="flux">Galore </div>
			</div>

			<div className="center_items">
				<h4>Search for your favourite movies <br/> using the TMDB database</h4>
				<input placeholder="Find a movie..."/>
			</div>
			</div>
		</div>
		);
}

export default Jumbatron;