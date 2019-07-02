import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TopRated from './Components/TopRated/TopRated';
import Popular from './Components/Popular/Popular'
import NowPlaying from './Components/NowPlaying/NowPlaying';
import Upcoming from './Components/Upcoming/Upcoming';
import Jumbatron from './Components/Jumbatron/Jumbatron';
import './App.css';

const api_key='c775303404fc7d314a5190e0708c61bf';

const urls=[
          `https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&language=en-US&page=1`,
          `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`,
          `https://api.themoviedb.org/3/movie/now_playing?api_key=${api_key}&language=en-US&page=1`,
          `https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}&language=en-US&page=1`
          ]

class App extends Component{
  constructor(){
    super();
     this.state={
          top_rated_list:[],
         popular_list:[],
         now_playing_list:[],
         upcoming:[]
        };

    //consider refactoring the code below to eliminate the repetition
    //of the fetch. Put it in a function or something.
    //dont forget about window.location.href
    fetch(urls[0])
        .then(result=>{
          return result.json();
        }).then(dat=>{
            this.setState({ top_rated_list : dat.results })
      })
    fetch(urls[1])
        .then(result=>{
          return result.json();
        }).then(dat=>{
            this.setState({ popular_list : dat.results })
      })
    fetch(urls[2])
        .then(result=>{
          return result.json();
        }).then(dat=>{
            this.setState({now_playing_list : dat.results})
      })
        fetch(urls[3])
        .then(result=>{
          return result.json();
        }).then(dat=>{
            this.setState({upcoming : dat.results})
      })  
  
  }

  render(){
    let movieDetails=this.state.upcoming[1];
   let backdrop='';
    if(movieDetails!==undefined)
    backdrop=movieDetails.backdrop_path;

  return (
    <div className="App">
      <Jumbatron backdrop={backdrop}/>
      <Popular popular={this.state.popular_list}/>
      <NowPlaying nowPlaying={this.state.now_playing_list}/>
      <Upcoming upcoming={this.state.upcoming}/>
      <TopRated toprated={this.state.top_rated_list}/>
    </div>
  );
}
}

export default App;