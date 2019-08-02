import React from 'react';

class ShowReviews extends React.Component{
	state={
		reviews:null
	}

	componentWillMount(){
		fetch(`https://api.themoviedb.org/3/movie/${this.props.movie_id}/reviews?api_key=${this.props.api_key}&language=en-US&page=1`)
			.then(result=>{
				return result.json();
			}).then(result=>{
				console.log("[ShowReviews Console] : ",result);
			})
	}

	render(){
		
		return(
			<div>
				reviews
				<p>{this.props.api_key} {this.props.movie_id}</p>
			</div>

		)
	}
}

export default ShowReviews;