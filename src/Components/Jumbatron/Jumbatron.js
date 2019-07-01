import React from 'react';

const Jumbatron = ({backdrop}) =>{
	console.log("Looking for backdtop ",backdrop);
	let background=`https://image.tmdb.org/t/p/original/${backdrop}`;
	
	submit(event) {

    let url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&query=ma&page=1&include_adult=false`;
    axios.get(url)
      .then(response => {
        let data = {
          results: response.data,
        };
        this.setState(data);
      })
      .catch(error => console.log(error));
  	}

	return(
		<div className="jumbatron" style={{backgroundImage:`url(${background})`, backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"}}>
			<div className="jumbatron_container">
			<div className="container tc">
			  <div className="neon">Movies </div>
			  <div className="flux">Galore </div>
			</div>

			<form onSubmit={this.submit}>
				<h4>Search for your favourite movies <br/> using the TMDB database</h4>
				<input className="pa1 b--green bg-lightest-blue" placeholder="Find a movie..."/>
				<button className="pa1 b--green bg-lightest-blue" type="Submit">
						<strong>Search</strong>
				</button>
			</form>
			</div>
		</div>
		);
}

export default Jumbatron;