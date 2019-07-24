import React, {Component} from 'react';
import Toolbar from '../../Components/Toolbar/Toolbar';
import SideDrawer from '../../Components/SideDrawer/SideDrawer';
import Footer from '../../Components/Footer/Footer';

class Layout extends Component{
	state={
		showSideDrawer:false
	}

	sideDrawerClosedHandler=()=>{
		this.setState((prevState)=>{
			return {showSideDrawer:!prevState.showSideDrawer}
		});
	}
	render(){
		return(
			<React.Fragment>
				<Toolbar toggleSideDrawer={()=>{this.sideDrawerClosedHandler()}}/>
				<SideDrawer show={this.state.showSideDrawer}
					toggleView={this.sideDrawerClosedHandler}/>
				{this.props.children}
				<Footer/>
			</React.Fragment>
		);
	}
}

export default Layout;