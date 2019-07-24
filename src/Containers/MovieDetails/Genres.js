import React, {Component} from 'react';

class Genres extends Component{
	render(){
		let genres=[]
		if(this.props.genres)
		Object.keys(this.props.genres).forEach((result)=>{
					
					if(result!=0)
						genres.push(" | ");

					genres.push(this.props.genres[result].name);
				})
		return(
			<div>
				<p>
					<strong>
						{genres}
					</strong>
				</p>
			</div>
		);
	}
}

export default Genres;