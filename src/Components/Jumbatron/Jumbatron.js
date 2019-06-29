import React from 'react';

const Jumbatron = (poster) =>{
	console.log(poster.poster);
	let get=poster.poster;
	return(
		<div className="jumbatron" style={{background:'rgba(45,12,45,1)',width:'100%',height:'100%'}}>
			
			<h1>Hello from Jumbatron</h1>

			<img src={`https://image.tmdb.org/t/p/w185/${get}`}/>
		</div>
		);
}

export default Jumbatron;