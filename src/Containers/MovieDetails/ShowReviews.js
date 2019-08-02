import React from 'react';
import './ShowReview.css';

class ShowReviews extends React.Component{
	state={
		reviews:null,
		movie_id:null
	}

	componentWillMount(){
		this.fetchReviews(this.props.movie_id);
	}

	fetchReviews(movie_id){
		fetch(`https://api.themoviedb.org/3/movie/${movie_id}/reviews?api_key=${this.props.api_key}&language=en-US&page=1`)
			.then(result=>{
				return result.json();
			}).then(result=>{
				this.setState(()=>{
					return{
						reviews:result.results.slice(0,5),
						movie_id:this.props.movie_id
					}
				});
			})
	}

	shouldComponentUpdate(nextProps,nextState){

		if(nextProps.movie_id!==this.props.movie_id){
			this.fetchReviews(nextProps.movie_id);
		}

		return nextProps.movie_id!==this.props.movie_id||this.state.reviews!==nextState.reviews;
	}

	render(){
		let display;

		if(this.state.reviews)
		if(this.state.reviews.length>0)
		 display=this.state.reviews.map(result=>{
			
			return(
				<div className="single_review">
					<h3>{result.author}</h3>
					{result.content.length>700?
						<React.Fragment>
						<p>{result.content.slice(0,700)}...</p>
						<a href={`${result.url}`} target="_blank">Read Full Review</a>
						</React.Fragment>:
						<p>{result.content}</p>
						}
				</div>
				)
		});
		else{
			display=<div className="blocked_section" style={{padding:"0.5em", textAlign:"center",display:"flex",justifyContent:"center",alignItems:"center",width:"100%", minHeight:"15vh", backgroundColor:"rgba(15,25,67,0.5)"}}>
						<h4>There are no reviews available for this movie...</h4>
					</div>
		}
		return(
			<div className="reviews">
				<h2>Reviews:</h2>
				{display}
			</div>

		)
	}
}

export default ShowReviews;