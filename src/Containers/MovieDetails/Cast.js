import React, {Component} from 'react';
import CastMemberCard from './CastMemberCard';
import CrewMemberCard from './CrewMemberCard';
import './Cast.css';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";


class Cast extends Component{

	state={
		cast:null,
		crew:null
	}

	componentWillMount(){
		this.retrieveData()
	}

	retrieveData=()=>{
		fetch(`https://api.themoviedb.org/3/movie/${this.props.movieId}/credits?api_key=c775303404fc7d314a5190e0708c61bf`)
			.then(results=>{
				return results.json();
			}).then(results=>{
				console.log("Finished fetching data:  ",results);
				this.setState(()=>{
					return {
						...this.state,
						cast:results.cast,
						crew:results.crew
					}
				});
			});
	}
	componentDidUpdate(){

	}
	shouldComponentUpdate(prevProps,prevState){
		if(prevProps.movieId!==this.props.movieId){
			setTimeout(()=>{this.retrieveData()},200)
		}
		return prevProps.movieId!==this.props.movieId||prevState!==this.state;
	}

	render(){
		let castMembers=[]
		let crewMembers=[]
		
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
			castMembers=Object.keys(this.state.cast).slice(0,10).map(result=>{
							return this.state.cast[result]
						})
			crewMembers=Object.keys(this.state.crew).slice(0,10).map(result=>{
							return this.state.crew[result]
						})
		}

		return(
			<React.Fragment>
				<div className="CastContainer">
				<h3>Cast:</h3>
				
				<AliceCarousel
				mouseDragEnabled buttonsDisabled={true}
		        autoPlayDirection="rtl"
		        autoPlay={false}
	            responsive={responsive}>
				{	

					castMembers.map((content,result)=>{
						return<div onDragStart={handleOnDragStart} key={content.id}>
							<CastMemberCard
								key={content.id}
								name={content.name}
								character={content.character}
								id={content.id}
								profile_path={content.profile_path}
								showActorDetails={(actorId)=>this.props.showActorDetails(actorId)}/>
							</div>
					
					})
				}
				
				</AliceCarousel>
				</div>
				<div className="CastContainer">
				<h3>Crew:</h3>
				<AliceCarousel
				mouseDragEnabled buttonsDisabled={true}
		        autoPlayDirection="rtl"
		        autoPlay={false}
	            responsive={responsive}>
				{crewMembers.map((content,result)=>{
						return<div onDragStart={handleOnDragStart} key={content.id}>
							<CrewMemberCard
								key={content.id}
								name={content.name}
								character={content.job}
								id={content.id}
								profile_path={content.profile_path}
								showActorDetails={(actorId)=>this.props.showActorDetails(actorId)}/>
							</div>
					
					})}
				</AliceCarousel>
				</div>
			</React.Fragment>
		)
	}
} 

export default Cast;