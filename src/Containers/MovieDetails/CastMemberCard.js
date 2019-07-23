import React from 'react';

const CastMemberCard = (props) =>{

	return(
		<div
			onClick={()=>props.showActorDetails(props.id)} 
			className="tc bg-light-green br3 ma2 dib bw2 shadow-5 grow"
			key={props.id}
			style={{width:"140px",textAlign:"center",color:"black"}}>
			<div 
				className="castCard"
				style={{margin:"0 auto",width:"140px",heigh:"150px",backgroundImage:`url(https://image.tmdb.org/t/p/w185/${props.profile_path})`}}>
				
			</div>
			<h4 style={{marginBottom:"0.1em"}}>{props.name}</h4>
			 {props.character?<h5 style={{marginTop:"0.1em"}}>Plays: {props.character}</h5>:null}
		</div>
	);
}
export default CastMemberCard;