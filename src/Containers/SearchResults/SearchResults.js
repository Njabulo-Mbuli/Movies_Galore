import React, {Component} from 'react';

const api_key='c775303404fc7d314a5190e0708c61bf';
let search_Term='';

class SearchResults extends Component{
    constructor(){
      super();
      this.state={
        search_results:[]
      }
    }

  render(){
 	return(
 			<div>
				<h1>Hello from results</h1>
			</div>
 		);
  }
 }


export default SearchResults;