import React from 'react';
import './SearchBox.css';

const SearchBox = (props) =>{

	return(
		<form onSubmit={(event)=>{props.findMovie(event)}} className="SearchForm form">
		  <input type="text" className="textbox" placeholder="Find a movie..." onChange={props.searchHandler}/>
		  <div title="Search" type="image"
				  style={{width:"75px",display:"flex",alignItems:"center",justifyContent:"center"}}
				  className="button"
				  onClick={props.findMovie}>
		  	Search
		  </div>
		</form>
	);
}

export default SearchBox;