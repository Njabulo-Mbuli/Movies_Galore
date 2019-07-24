import React from 'react';
import {Link} from 'react-router-dom'
import './SideDrawer.css';
import Backdrop from '../BackDrop/Backdrop';
import SearchBox from '../SearchBox/SearchBox';
const SideDrawer = (props) =>{

	let attachedClasses = ["SideDrawer","Open"]
	
	if(!props.show){
		attachedClasses=["SideDrawer","Closed"];
	}
	return(
		<React.Fragment>
			<Backdrop show={props.show} hideModal={props.toggleView}/>
			<div className={attachedClasses.join(" ")}>
				<h2>Movie Club</h2>
				<SearchBox searchHandler={(event)=>this.searchHandler(event)} findMovie={(event)=>this.findMovie(event)}/>
			<nav>
  				<ul className="navigation_item">
  					<li onClick={props.toggleView}><Link to="/">Home</Link></li>
  					<li onClick={props.toggleView}><a href="http://www.njabulombuli.co.za" target="_blank" rel="noopener noreferrer">My Website</a></li>
  				</ul>
  			</nav>
  			<div onClick={props.toggleView} style={{width:"100%",height:"100%", position:"absolute", top:"0",left:"0",zIndex:"-5"}}></div>
			</div>
		</React.Fragment>
	);
}

export default SideDrawer;