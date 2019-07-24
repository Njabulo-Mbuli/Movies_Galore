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

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

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
        <div 
        className={"burgerMenu"}
        onClick={this.props.toggleSideDrawer}>
          <div className="slant"></div>
          <div className="slant"></div>
          <div className="slant"></div>
        </div>

  			<nav>
  				<ul className="navigation_items">
  					<li><Link to="/">Home</Link></li>
  					<li><a href="http://www.njabulombuli.co.za" target="_blank" rel="noopener noreferrer">My Website</a></li>
  				</ul>
  			</nav>
  			<Logo/>
  			<div className="ToolBarSearchForm"><SearchBox searchHandler={(event)=>this.searchHandler(event)} findMovie={(event)=>this.findMovie(event)}/></div>
			</header>
		);
	}
}

export default withRouter(Toolbar);