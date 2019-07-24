import React from 'react';

const Footer = () =>{
	console.log(new Date);
	return(
		<div style={{marginTop:"10em",marginBottom:"0",backgroundColor:"#34e89e", padding:"1.4em"}}>
			<h1>Movie Club</h1>
			<p>Code and Design by: Njabulo Mbuli</p>
			<p>Phone Number: 074 966 8295</p>
			<p>Copyright &copy; 2019</p>
		</div>
	);
}

export default Footer;