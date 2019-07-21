import React, {Component} from 'react';
import Logo from '../Logo/Logo';
import SearchBox from '../SearchBox/SearchBox';
import './Toolbar.css';

class Toolbar extends Component{
	state={
			prevScrollPos:window.pageYOffset,
			visible:false
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
  	}

	render(){
		let hideClass = this.state.visible?"Toolbar-hidden":"Toolbar-shown";
		return(
			<header className={`Toolbar ${hideClass}`}>
			<nav>
				<ul className="navigation_items">
					<li>Home</li>
					<li><a href="http://www.njabulombuli.co.za" target="_blank">My Website</a></li>
				</ul>
			</nav>
			<Logo/>
			<SearchBox searchHandler={(event)=>this.searchHandler(event)}/>
			</header>
		);
	}
}

export default Toolbar;