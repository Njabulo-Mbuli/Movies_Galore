import React, {Component} from 'react';
import Backdrop from './Backdrop';
import MovieCard from './MovieCard';
import Spinner from '../../Components/Spinner/Spinner';
import Modal from './CharacterModal/Modal';
import Cast from './Cast';

const api_key='c775303404fc7d314a5190e0708c61bf';
const url=`https://api.themoviedb.org/3/movie/`;
const SPINNER =<div style={{height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}}><Spinner/></div>;
let actorDetails

class MovieDetails extends Component{
	
	state={
		MovieDetails:null,
		actorDetails:null,
		show:false,
		showActor:false,
		actorId:null
	}

	//When the movie details component mounts it then fetches the data that
	//it needs to display on the screen
	componentDidMount(){
		window.scroll({top:0,left:0,behaviour:"smooth"});
		const query = new URLSearchParams(this.props.location.search);
		
		for(let param of query.entries()){
			if(param[0]==="id"){
				fetch(url+`${param[1]}?api_key=${api_key}&language=en-US`)
			        .then(result=>{
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
				this.setState(()=>{
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
			actorDetails:null
		})},500);
	}
	render(){

		let display=SPINNER;
		
		if(this.state.showActor){
			actorDetails=SPINNER;
		}

		if(this.state.showActor&&this.state.actorDetails){
			actorDetails=<div>
							<div style={{display:"flex",flexFlow:"row"}}>
								<div className="shadow-1 castCard" style={{margin:"0",width:"140px",heigh:"150px",backgroundImage:`url(https://image.tmdb.org/t/p/w185/${this.state.actorDetails.profile_path})`}}></div>
								<div style={{padding:"0.4em"}}>
									<h2>{this.state.actorDetails.name}</h2>
									<h3>Birthday: {this.state.actorDetails.birthday}</h3>
									<h3>Place of Birth: {this.state.actorDetails.place_of_birth}</h3>
								</div>
							</div>
							<h2 style={{padding:"0",margin:"0"}}>Biography:</h2>
							<p style={{maxHeight:"150px",overflow:"auto"}}>{this.state.actorDetails.biography}</p>
							<button className="f6 link dim ba bw1 ph3 pv2 mb2 dib black" onClick={this.toggleModalHandler}>Close</button>
						</div>
		}

		if(this.state.MovieDetails){
			display=(
				<div style={{minHeight:"100vh"}}>
					<Backdrop backdrop_path={this.state.MovieDetails.backdrop_path}/>
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
					{actorDetails}
				</Modal>
				{display}
			</React.Fragment>
		);
	}
}

export default MovieDetails;