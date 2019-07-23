import React, {Component} from 'react';
import { withRouter,Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import SearchBox from '../SearchBox/SearchBox';
import './Toolbar.css';

class Toolbar extends Component{
	state={
			prevScrollPos:window.pageYOffset,
			visible:false,
			searchTerm:''
		}


	  // Adds an event listener when the component is mount.
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  // Hide or show the menu.
  handleScroll = () => {
    const { prevScrollpos } = this.state;

    const currentScrollPos = window.pageYOffset;

    let visible=this.state.visible;
    if(currentScrollPos>300||currentScrollPos===0)
     visible = prevScrollpos < currentScrollPos;

    this.setState({
      prevScrollpos: currentScrollPos,
      visible
    });
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
		let toolBarToggle = this.state.visible?"Toolbar-hidden":"Toolbar-shown";
		return(
			<header className={`Toolbar ${toolBarToggle}`}>
			<nav>
				<ul className="navigation_items">
					<li><Link to="/">Home</Link></li>
					<li><a href="http://www.njabulombuli.co.za" target="_blank">My Website</a></li>
				</ul>
			</nav>
			<Logo/>
			<SearchBox searchHandler={(event)=>this.searchHandler(event)} findMovie={(event)=>this.findMovie(event)}/>
			</header>
		);
	}
}

export default withRouter(Toolbar);