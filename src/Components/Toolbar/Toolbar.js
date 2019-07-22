import React, {Component} from 'react';
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

  // Remove the event listener when the component is unmount.
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  // Hide or show the menu.
  handleScroll = () => {
    const { prevScrollpos } = this.state;

    const currentScrollPos = window.pageYOffset;

    let visible=this.state.visible;
    if(currentScrollPos>300)
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
  		console.log("Almost there ma nig: ",this.state.searchTerm);
  	}

  	findMovie=(event)=>{
  		event.preventDefault();
  		console.log("We are in the find movie", this.state.searchTerm);
  	}
	render(){
		let toolBarToggle = this.state.visible?"Toolbar-hidden":"Toolbar-shown";
		return(
			<header className={`Toolbar ${toolBarToggle}`}>
			<nav>
				<ul className="navigation_items">
					<li>Home</li>
					<li><a href="http://www.njabulombuli.co.za" target="_blank">My Website</a></li>
				</ul>
			</nav>
			<Logo/>
			<SearchBox searchHandler={(event)=>this.searchHandler(event)} findMovie={(event)=>this.findMovie(event)}/>
			</header>
		);
	}
}

export default Toolbar;