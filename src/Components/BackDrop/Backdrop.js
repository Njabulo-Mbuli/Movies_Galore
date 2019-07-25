import React from 'react';
import './Backdrop.css';

const Backdrop = (props) =>{
	return(props.show?
	<div className="Backdrop" onClick={props.hideModal}></div>:
	<div className="Backdrop" style={{transform:'translateY(-150vh)',opacity:'0'}} 
	onClick={props.hideModal}></div>);
}

export default Backdrop;