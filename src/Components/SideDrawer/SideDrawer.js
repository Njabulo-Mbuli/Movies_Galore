import React, {Component} from 'react';
import {Link,withRouter} from 'react-router-dom'
import './SideDrawer.css';
import Backdrop from '../BackDrop/Backdrop';
import SearchBox from '../SearchBox/SearchBox';

class SideDrawer extends Component{
	 	state={
	 		searchTerm:null
	 	}

	 	searchHandler = (event) =>{
  		event.preventDefault();
  		let searchValue=event.target.value;
  		this.setState(()=>{
  			return{
  				...this.state,
  				searchTerm:searchValue
  			}
  		});
  	}

  	findMovie=(event)=>{
  		event.preventDefault();
  		if(this.state.searchTerm){
  			this.props.toggleView();
  			this.props.history.push({
	      pathname:'/search_results',
	      search:`?search=${this.state.searchTerm}`
	    });
  		}
  		else{
  			window.alert("Please enter a term to search for...");
  		}
  	}

	render(){
		let attachedClasses = ["SideDrawer","Open"]
		
		if(!this.props.show){
			attachedClasses=["SideDrawer","Closed"];
		}
		return(
			<React.Fragment>
				<Backdrop show={this.props.show} hideModal={this.props.toggleView}/>
				<div className={attachedClasses.join(" ")}>
					<h2>Movie Club</h2>
					<SearchBox searchHandler={(event)=>this.searchHandler(event)} findMovie={(event)=>this.findMovie(event)}/>
				<nav className="try">
	  				<ul className="navigation_items_sideDrawer">
	  					<li onClick={this.props.toggleView}><Link to="/">Home</Link></li>
	  					<li onClick={this.props.toggleView}><a href="http://www.njabulombuli.co.za" target="_blank" rel="noopener noreferrer">My Website</a></li>
	  				</ul>
	  			</nav>
	  			<div style={{marginTop:"50vh"}}><h3><a href="www.njabulombuli.co.za"><em>Developed and maintained by Njabulo Mbuli</em></a></h3></div>
	  			<div onClick={this.props.toggleView} style={{width:"100%",height:"100%", position:"absolute", top:"0",left:"0",zIndex:"-5"}}></div>
				</div>
			</React.Fragment>
		);
	}
}

export default withRouter(SideDrawer);