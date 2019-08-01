import React from 'react';
import './ShowTrailer.css';

let api_key='c775303404fc7d314a5190e0708c61bf';

class ShowTrailer extends React.Component{
	
	state={
		trailerKeys:null
	}

	componentWillMount(){
		this.fetchTrailer(this.props.movie_id);
	}

	fetchTrailer=(movie_id)=>{
		fetch(`https://api.themoviedb.org/3/movie/${movie_id}/videos?api_key=${api_key}&language=en-US`)
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

	shouldComponentUpdate(prevProps,prevState){
		return 	prevState!==this.state;
	}

	render(){
		let display=null;

		if(this.state.trailerKeys){
			if(this.state.trailerKeys.length>0){
				display=<div class="embed-container" >
							<iframe src={`https://www.youtube.com/embed/${this.state.trailerKeys[0].key}`}
									frameborder='0' allowfullscreen>
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