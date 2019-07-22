import React, {Component} from 'react';
import { Link,Switch,Route,BrowserRouter as Router,Redirect } from 'react-router-dom';
import SearchResults from '../../Containers/SearchResults/SearchResults';

const api_key='c775303404fc7d314a5190e0708c61bf';
let search_Term='';
class Search extends Component{

  constructor() {
    super();
    this.state = {
      results:null
    };

  }

submit() {
	console.log("Printing from the submit: ",search_Term);
	if(search_Term.length>1){	
    let url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&query=${search_Term}&page=1&include_adult=false`;
   	fetch(url)
      .then(response => {
        return response.json()
      }).then(data => {
      })
      .catch(error => console.log(error));
      // window.location.href="../SearchResults/SearchResults.js";
      }
      else console.log("Enter a search term");
      
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
  		
        <Link to={`/SearchResults/${search_Term}`}>	
          <button className="pa1 b--green bg-lightest-blue" type="Submit" onClick={this.submit.bind(this)}>
  						<strong>Search</strong>
  				</button>
        </Link>

      <Router>
        <Route exact path="/SearchResults/:search_Term" componponent={SearchResults}/>
        <Redirect exact to="/"/>
      </Router>
			</div>

 		);
 }

}

export default Search;