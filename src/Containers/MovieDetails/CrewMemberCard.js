import React from 'react';

const CastMemberCard = (props) =>{

	let backup_background=require("../../assets/no_image_found_poster.png");

	return(
		<div
			onClick={()=>props.showActorDetails(props.id)} 
			className="tc ma2 dib bw2 shadow-5 grow"
			key={props.id}
			style={{width:"140px",textAlign:"center",color:"white",backgroundColor:"rgba(250,0,0,0.5)"}}>
			<div 
				className="castCard"
				style={{margin:"0 auto",width:"140px",heigh:"150px",backgroundImage:`url(https://image.tmdb.org/t/p/w185/${props.profile_path}),url(${backup_background})`}}>
				
			</div>
			<p style={{marginBottom:"0.1em"}}><strong>{props.name}</strong></p>
			 {props.character?<p style={{marginTop:"0.1em", padding:"0.2em"}}><em>Job: {props.character}</em></p>:null}
		</div>
	);
}
export default CastMemberCard;