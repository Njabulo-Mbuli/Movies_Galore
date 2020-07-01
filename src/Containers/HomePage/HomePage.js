import React, { Component } from 'react';
import TopRated from '../../Components/TopRated/TopRated';
import Popular from '../../Components/Popular/Popular'
import NowPlaying from '../../Components/NowPlaying/NowPlaying';
import Upcoming from '../../Components/Upcoming/Upcoming';
import Jumbatron from '../../Components/Jumbatron/Jumbatron';
import Spinner from '../../Components/Spinner/Spinner';
import './HomePage.css';

const api_key='c775303404fc7d314a5190e0708c61bf';
categories = ((`https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&language=en-US&page=1`,"top_rated_list"),
              (`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`,"popular_list"),
              (`https://api.themoviedb.org/3/movie/now_playing?api_key=${api_key}&language=en-US&page=1`,"now_playing_list"),
              (`https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}&language=en-US&page=1`,"upcoming"))

class HomePage extends Component{
  constructor(){
    super();
     this.state={
          top_rated_list:[],
         popular_list:[],
         now_playing_list:[],
         upcoming:[]
        };

    categories.forEach(a=>{
      this.fetchCategory(a)
    })       
  }

  fetchCategory(chosen){
    fetch(chosen[0])
        .then(result=>{
          return result.json();
        }).then(dat=>{
            this.setState({[`${chosen[1]}`]:dat.results})
      })
  }

  componentDidMount(){
    window.scroll({top:0,left:0,behaviour:"smooth"});
  }

   showMovieHandler = (movieDetails) =>{
    
    this.props.history.push({
      pathname:'/movie_details',
      search:`?id=${movieDetails.id}`
    });
  }

  render(){
   
    let display=<div style={{height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}}><Spinner/></div>
    let movieDetails=this.state.upcoming[1];
   let backdrop='';
    if(movieDetails){
      backdrop=movieDetails.backdrop_path;
      display= (<div className="HomePage">
                    <Jumbatron
                        backdrop={backdrop}
                        showMovie={(movieDetails)=>this.showMovieHandler(movieDetails)}/>
                    <a id="top"></a>
                    <Popular 
                        popular={this.state.popular_list}
                        showMovie={(movieDetails)=>this.showMovieHandler(movieDetails)}/>
                    <NowPlaying 
                        nowPlaying={this.state.now_playing_list}
                        showMovie={(movieDetails)=>this.showMovieHandler(movieDetails)}/>
                    <Upcoming 
                        upcoming={this.state.upcoming}
                        showMovie={(movieDetails)=>this.showMovieHandler(movieDetails)}/>
                    <TopRated 
                        toprated={this.state.top_rated_list}
                        showMovie={(movieDetails)=>this.showMovieHandler(movieDetails)}/>
                </div>)
    }


  return (
    <React.Fragment >
        {display}
    </React.Fragment>
  );
}
}

export default HomePage;