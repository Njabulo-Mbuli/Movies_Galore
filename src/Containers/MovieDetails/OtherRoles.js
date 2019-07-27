import React, {Component} from 'react';
import RoleCard from './RoleCard';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

class OtherRoles extends Component{

	state={
		roles:null,
		currentIndex:0
	}

	render(){
		let actorRoles=[]
		
		  const handleOnDragStart=e=>e.preventDefault()


  
  let responsive={
                0:{
                    items: 2
                  },
                600:{
                    items: 2
                  },
                  700:{
                  	items:3
                  },
                1024:{
                    items: 5
                  },
                };

		return(
			<React.Fragment>
				<div style={{padding:"0",width:"60vw",overflow:"hidden", margin:"0.2em auto"}}>
				<AliceCarousel
				mouseDragEnabled buttonsDisabled={true}
				keyControlDisabled={false}

				dotsDisabled={true}
		        autoPlayDirection="rtl"
		        autoPlayInterval={2000}
	            responsive={responsive}>
				{	

					this.props.roles.map((content,result)=>{
						return<div onDragStart={handleOnDragStart} key={content.id}>
							<RoleCard
								key={content.id}
								title={content.title}
								character={content.character}
								id={content.id}
								poster_path={content.poster_path}
								showMovieDetails={(actorId)=>this.props.showMovieDetails(content.id)}
								hideModal={()=>{this.props.hideModal()}}/>
							</div>
					
					})
				}
				
				</AliceCarousel>
				</div>
			</React.Fragment>
		)
	}
}

export default OtherRoles;