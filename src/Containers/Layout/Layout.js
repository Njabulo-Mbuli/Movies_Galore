import React, {Component} from 'react';
import Toolbar from '../../Components/Toolbar/Toolbar';

class Layout extends Component{

	render(){
		return(
			<React.Fragment>
				<Toolbar/>
				{this.props.children}
			</React.Fragment>
		);
	}
}

export default Layout;