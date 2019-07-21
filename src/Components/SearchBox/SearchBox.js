import React from 'react';
import './SearchBox.css';

const SearchBox = (props) =>{

	return(
		<form method="post">
		  <input type="text" class="textbox" placeholder="Search"/>
		  <input title="Search" value="?" type="submit" class="button" onClick={props.searchHandler}/>
		</form>
	);
}

export default SearchBox;