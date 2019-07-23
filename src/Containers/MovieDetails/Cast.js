import React, {Component} from 'react';
import CastMemberCard from './CastMemberCard';
import './Cast.css';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";


class Cast extends Component{

	state={
		cast:null
	}

	componentWillMount(){
		fetch(`https://api.themoviedb.org/3/movie/${this.props.movieId}/credits?api_key=c775303404fc7d314a5190e0708c61bf`)
			.then(results=>{
				return results.json();
			}).then(results=>{
				this.setState(()=>{
					return {
						cast:results.cast
					}
				});
			});
	}

	render(){
		let castMembers=[]
		
		  const handleOnDragStart=e=>e.preventDefault()
  
  let responsive={
                0:{
                    items: 2
                  },
                600:{
                    items: 3
                  },
                  700:{
                  	items:4
                  },
                1024:{
                    items: 5
                  },
                };

		if(this.state.cast){
			let count=0;
			Object.keys(this.state.cast).slice(0,10).map(result=>{
							castMembers.push(this.state.cast[result])
							count++;
							if(count>10){
								return;
							}
						})
		}

		return(
			<React.Fragment>
				<div style={{padding:"0",width:"90vw",overflow:"hidden", margin:"8vh auto"}}>
				<AliceCarousel 
				mouseDragEnabled buttonsDisabled={true}
		        autoPlayDirection="rtl"
		        autoPlay={false}
	            responsive={responsive}>
				{	

					castMembers.map((content,result)=>{
						return<div onDragStart={handleOnDragStart} key={content.id}>
							<CastMemberCard
								name={content.name}
								character={content.character}
								id={content.id}
								profile_path={content.profile_path}
								showActorDetails={(actorId)=>this.props.showActorDetails(actorId)}/>
							</div>
					
					})
				}
				
				</AliceCarousel>]
				</div>
			</React.Fragment>
		)
	}
} 

export default Cast;