import React from 'react';
import './SearchBox.css';
import searchLogo from '../../assets/search.svg';

const SearchBox = (props) =>{

	return(
		<div className="form">
		  <input type="text" className="textbox" placeholder="Find a movie..." onChange={props.searchHandler}/>
		  <div title="Search" type="image" style={{width:"75px",display:"flex",alignItems:"center",justifyContent:"center"}} className="button" onClick={props.findMovie}>
		  	Search
		  </div>
		</div>
	);
}

export default SearchBox;