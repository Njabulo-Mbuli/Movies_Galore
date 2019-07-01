import React, {Component} from 'react';

const api_key='c775303404fc7d314a5190e0708c61bf';
let search_Term='';
class Search extends Component{

  constructor(props) {
    super(props);
    this.state = {
      results:null
    };

    console.log("this is the state",this.state);
  }

submit() {
	console.log("Printing from the submit: ",search_Term);
	if(search_Term.length>1){	
    let url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&query=${search_Term}&page=1&include_adult=false`;
   	fetch(url)
      .then(response => {
        return response.json()
      }).then(data => {
      	console.log("This is the search results: ",data.results);
      })
      .catch(error => console.log(error));

      console.log("This is what the search returned: ",this.state.results);
      }
      else console.log("Enter a search term");
// window.location.href="https://www.google.com";
  	}

searchChange(event){
	search_Term=event.target.value;	
}

performSearch(searchTerm){

}
 render(){
 	return(
 			<div>
				<h4>Search for your favourite movies <br/> using the TMDB database</h4>
				<input id="search_Term" type="text" className="pa1 b--green bg-lightest-blue" onChange={this.searchChange} placeholder="Find a movie..."/>
				<button className="pa1 b--green bg-lightest-blue" type="Submit" onClick={this.submit.bind(this)}>
						<strong>Search</strong>
				</button>
			</div>
 		);
 }

}

export default Search;