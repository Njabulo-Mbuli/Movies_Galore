import React, {Component} from 'react';
import Backdrop from './Backdrop';
import MovieCard from './MovieCard';
import Spinner from '../../Components/Spinner/Spinner';
import Modal from './CharacterModal/Modal';
import Cast from './Cast';
import OtherRoles from './OtherRoles';
import './MovieDetails.css';
import CloseButton from '../../assets/close.png';

const api_key='c775303404fc7d314a5190e0708c61bf';
const url=`https://api.themoviedb.org/3/movie/`;
const SPINNER =<div style={{height:"95vh",display:"flex",justifyContent:"center",alignItems:"center"}}><Spinner/></div>;
let actorDetails,actorRoles;

class MovieDetails extends Component{
	
	state={
		MovieDetails:null,
		actorDetails:null,
		actorRoles:null,
		show:false,
		showActor:false,
		actorId:null,
		movieId:null
	}

	//When the movie details component mounts it then fetches the data that
	//it needs to display on the screen
	
	componentDidMount(){
		window.scroll({top:0,left:0,behaviour:"smooth"});

		this.retrieveData()
	}

	retrieveData=()=>{
		window.scroll({top:0,left:0,behaviour:"smooth"});
		const query = new URLSearchParams(this.props.location.search);
		
		for(let param of query.entries()){
			if(param[0]==="id"){
				fetch(url+`${param[1]}?api_key=${api_key}&language=en-US`)
			        .then(result=>{
			        	this.setState(()=>{
			        return{
			        		...this.state,
			        		movieId:param[1]
			        		}
			        	});
			           return result.json();
			        }).then(result=>{
			        	this.setState(()=>{
			        		return{
			        			...this.state,
			        			MovieDetails:result
			        		}
			        	});
			        });

			}
			else{
				this.props.history.goBack();
			}
		}

		this.setState({
			...this.state,
			show:true
		})
	}

	shouldComponentUpdate(prevProps,prevState){

		setTimeout(()=>{
		const query = new URLSearchParams(this.props.location.search);
		
		for(let param of query.entries()){
			if(param[1]!==this.state.movieId){
				this.retrieveData()
			}
		}},200)

		return prevState!==this.state;
	}

	showActorDetails=(id)=>{
		this.setState({
			...this.state,
			showActor:!this.state.showActor,
			actorId:id
		});
		//Fetching the actor's details that need to be displayed for the modal that drops down
		//when someone clicks the icon of a single cast member in the movie details page
		fetch(`https://api.themoviedb.org/3/person/${id}?api_key=${api_key}&language=en-US`)
			.then(result=>{
				return result.json()
			}).then(result=>{
				console.log("[ACTOR DETAILS] ",result)
				this.setState(()=>{
					setTimeout(()=>{this.fetchOtherRolesHandler()},300);
				return{	...this.state,
					actorDetails:result}
				});
			})


	}

	//This is for toggling the Modal that shows the cast member's details
	toggleModalHandler=()=>{
		this.setState({
			...this.state,
			showActor:!this.state.showActor
		})
		setTimeout(()=>{this.setState({
			...this.state,
			actorDetails:null,
			actorRoles:null
		})},500);
	}

	fetchOtherRolesHandler=()=>{
			fetch(`https://api.themoviedb.org/3/person/${this.state.actorDetails.id}/movie_credits?api_key=${api_key}&language=en-US`)
					.then((result)=>{
						return result.json()
					}).then(result=>{
							this.setState(()=>{
								return {
									...this.state,
									actorRoles:result
								}
							});
					})
	}

	showMovieHandler = (id) =>{
	    this.props.history.push({
	      pathname:'/movie_details',
	      search:`?id=${id}`
	    });
  	}

	render(){

		let display=SPINNER;
		let backup_poster=require("../../assets/no_image_found_poster.png");
		
		if(this.state.showActor){
			actorDetails=<div className="spinner">{SPINNER}</div>;
			actorRoles=null;
		}

		if(this.state.showActor&&this.state.actorDetails){
			
			actorDetails=<React.Fragment>
							<div style={{margin:"0",display:"flex",flexFlow:"row"}}>
								<div className="shadow-1 castCard" style={{margin:"0",width:"140px",heigh:"150px",backgroundImage:`url(https://image.tmdb.org/t/p/w185/${this.state.actorDetails.profile_path}),url(${backup_poster})`}}></div>
								<div style={{padding:"0.4em"}}>
									<h2>{this.state.actorDetails.name}</h2>
									<h3>Birthday :
											{this.state.actorDetails.birthday?
												this.state.actorDetails.birthday:
												<span style={{color:"grey"}}> <em>Unknown</em></span>}
									</h3>
									<h3>Place of Birth: {this.state.actorDetails.place_of_birth?
												this.state.actorDetails.place_of_birth:
												<span style={{color:"grey"}}> <em>Unknown</em></span>}</h3>
								</div>
							</div>
							<h2 style={{padding:"0",margin:"0"}}>Biography:</h2>
							<p style={{maxHeight:"150px",overflow:"auto"}}>{this.state.actorDetails.biography?
												this.state.actorDetails.biography:
												<span style={{color:"grey"}}> <em>Sorry, but the biography for {this.state.actorDetails.name} was not found...</em></span>}</p>
						</React.Fragment>


			if (this.state.actorRoles){
				actorRoles=<OtherRoles 
								roles={this.state.actorRoles.cast}
								showMovieDetails={(id)=>{this.showMovieHandler(id)}}
								hideModal={()=>{this.toggleModalHandler()}}/>;
			}
		}



		if(this.state.MovieDetails){
			console.log("[MOVIE DETAILS] : ",this.state.MovieDetails);
			display=(
				<div style={{minHeight:"100vh"}}>
					<Backdrop 
							backdrop_path={this.state.MovieDetails.backdrop_path}
							tagline={this.state.MovieDetails.tagline}/>
						<div style={{alignSelf:"center"}}>
						<MovieCard 
							poster={this.state.MovieDetails.poster_path}
							title={this.state.MovieDetails.title}
							rating={this.state.MovieDetails.vote_average}
							vote_count={this.state.MovieDetails.vote_count}
							overview={this.state.MovieDetails.overview}
							genres={this.state.MovieDetails.genres}/>
						<Cast movieId={this.state.MovieDetails.id}
							showActorDetails={(actorId)=>this.showActorDetails(actorId)}/>

					</div>
				</div>);
		}

		return(
			<React.Fragment>
				<Modal show={this.state.showActor} hideModal={()=>this.toggleModalHandler()} onClick={this.state.showActor}>
					<div style={{boxSixing:"border-box",width:"100%"}}>
					{actorDetails}
					<div className="roles" style={{margin:"0",padding:"0",width:"100%", height:"35vh", justifyContent:"center"}}>
							{actorRoles}
					</div>
					<img src={CloseButton} style={{margin:"0",width:"2em",height:"auto"}} className="closeButton" onClick={this.toggleModalHandler}/>
					</div>
				</Modal>
				{display}
			</React.Fragment>
		);
	}
}

export default MovieDetails;