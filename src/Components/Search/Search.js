import React, {Component} from 'react';

const api_key='c775303404fc7d314a5190e0708c61bf';

class Search extends Component{

  constructor(props) {
    super(props);
    this.state = {
      results: [],
      term: '',
    };

    this.submit = this.submit.bind(this);
    this.changeTerm = this.changeTerm.bind(this);
  }

  changeTerm(event) {
    this.setState({term: event.target.value});
  }

submit(event) {

    let url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&query=ma&page=1&include_adult=false`;
   	fetch(url)
      .then(response => {
        let data = {
          results: response.data,
        };
        this.setState(data);
      })
      .catch(error => console.log(error));
  	}

searchChange(event){
	console.log(event.target.value);
}

 render(){
 	return(
 			<form onSubmit={this.submit()}>
				<h4>Search for your favourite movies <br/> using the TMDB database</h4>
				<input className="pa1 b--green bg-lightest-blue" onChange={this.searchChange} placeholder="Find a movie..."/>
				<button className="pa1 b--green bg-lightest-blue" type="Submit">
						<strong>Search</strong>
				</button>
			</form>
 		);
 }

}

export default Search;