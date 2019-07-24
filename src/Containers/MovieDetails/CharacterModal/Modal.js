import React, {Component} from 'react';
import Backdrop from '../../../Components/BackDrop/Backdrop';
import './Modal.css';

class Modal extends Component{

	shouldComponentUpdate(nextProps,nextState){
		return nextProps.show!==this.props.show || nextProps.children!==this.props.children;
	}

	render(){
		return	<React.Fragment>
			<Backdrop show={this.props.show}
				hideModal={this.props.hideModal}/>
			<div
				style={{transform:this.props.show?'translateY(-10vh)':'translateY(-120vh)',
						opacity:this.props.show?'1':'0'}} 
				className="Modal">
				{this.props.children}
			</div>

			</React.Fragment>
	}
}
export default Modal;