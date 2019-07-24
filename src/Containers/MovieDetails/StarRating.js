import React,{Component} from 'react';
import filled_star from '../../assets/star-filled.png';
import unfilled_star from '../../assets/star-unfilled.png';

//This class returns a the star ratings for the Movie details page.
//Its 5 "star images" to visualise the ratings the movie received.
class StarRating extends Component{
	
	render(){
		let display=<p style={{color:"grey"}}><em>No ratings found...</em></p>
		let rating=Math.floor(this.props.rating/2);

		if(rating){
			display=[];
			let counter=5
			while(counter>0){

				if(rating>0){
					display.push(<img key={counter} style={{height:"14px",width:"14px"}} alt="filed_star" src={filled_star}/>);
					rating--;
				}
				else{
					display.push(<img key={counter} style={{height:"14px",width:"14px"}} alt="empty star" src={unfilled_star}/>)
					rating--;
				}
				counter--;
			}

			display.push(<p key={Math.random()} style={{margin:"0",padding:"0"}}>({this.props.vote_count})</p>)
		
		}
		
	return(
		<React.Fragment>
			{display}
		</React.Fragment>

		);
	}
}

export default StarRating;