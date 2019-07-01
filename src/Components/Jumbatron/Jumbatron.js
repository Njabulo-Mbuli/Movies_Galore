import React from 'react';
import Search from '../Search/Search';

const Jumbatron = ({backdrop}) =>{
	console.log("Looking for backdtop ",backdrop);
	let background=`https://image.mdb.org/t/p/original/${backdrop}`;

	return(
		<div className="jumbatron" style={{backgroundImage:`url(${background})`, backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"}}>
			<div className="jumbatron_container">
			<div className="container tc">
			  <div className="neon">Movies </div>
			  <div className="flux">Galore </div>
			</div>
			<Search/>
			</div>
		</div>
		);
}

export default Jumbatron;