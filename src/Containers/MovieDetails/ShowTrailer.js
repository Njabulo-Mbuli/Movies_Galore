import React from 'react';
import './ShowTrailer.css';

class ShowTrailer extends React.Component{
	
	state={
		trailerKeys:null,
		movie_id:null
	}

	componentWillMount(){
		this.fetchTrailer(this.props.movie_id);
	}

	fetchTrailer=(movie_id)=>{
		fetch(`https://api.themoviedb.org/3/movie/${movie_id}/videos?api_key=${this.props.api_key}&language=en-US`)
					.then(result=>{
						return result.json();
					}).then(result=>{
						let temp_storage = result.results.map(data=>{
							return data;
						});

						this.setState(()=>{
							return{
								...this.state,
								trailerKeys:temp_storage
							}
						});
					})
		
	}

	shouldComponentUpdate(nextProps,nextState){
		if(nextProps.movie_id!==this.props.movie_id){
			this.fetchTrailer(nextProps.movie_id);
		}
		return nextProps.movie_id!==this.props.movie_id||nextState.trailerKeys!==this.state.trailerKeys;

	}

	render(){
		let display=null;

		if(this.state.trailerKeys){
			if(this.state.trailerKeys.length>0){
				display=<div class="embed-container" >
							<iframe src={`https://www.youtube.com/embed/${this.state.trailerKeys[0].key}`}
									frameborder='0' allowfullscreen="">
							</iframe>
						</div>
			}
		}
		return(<React.Fragment>
					{display}
			</React.Fragment>
	)
	}
}

export default ShowTrailer;