import React from 'react';
import ('./Footer.css');

const Footer = () =>{
	return(
		<div className="Footer_Styling">
			<div className="footer_main_block">
			<section className="footer_block" style={{width:"100%",maxWidth:"400px"}}>

				<h1 className="Footer_Title">Movie Club</h1>
				<section className="footer_section"><p>Code and Design by: </p><p>Njabulo Mbuli</p></section>
				<section className="footer_section"><p>Phone Number: </p><p> 074 966 8295</p></section>
				<section className="footer_section"><p>Email: </p><p>admin@njabulombuli.co.za</p></section>

			</section>

			<section className="footer_block footer_links">

					<a href="https://www.themoviedb.org" target="_blank">
						<div className="tmdb_logo" style={{width:"100%"}}></div>
					</a>
					<div className="social_links">
						<a href="https://www.twitter.com/themoviedb" style={{padding:"1.2em"}} target="_blank"><div className="twitter_logo"></div></a>
						<a href="https://www.facebook.com/themoviedb" style={{padding:"1.2em"}} target="_blank"><div className="facebook_logo"></div></a>
					</div>

			</section>
			</div>
			
			<p style={{width:"100%",textAlign:"center"}}>Copyright &copy; 2019</p>

		</div>
	);
}

export default Footer;