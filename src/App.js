import React, { Component } from 'react';
import TopRated from './Components/TopRated/TopRated';
import Popular from './Components/Popular/Popular'
import NowPlaying from './Components/NowPlaying/NowPlaying';
import Upcoming from './Components/Upcoming/Upcoming';
// import API_KEY from 'config.js'
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

    // const promises = urls.map(url=>fetch(url));

    // Promise.all(promises).then(responses=>{
    //   responses.forEach(response=>console.log(response.url))
    //   return responses;
    // }).then(responses=>Promise.all(responses.map(r=>r.json())))
    // .then(users=>users.forEach(us er=>
    //   user.results.map((moviedetails,count)=>
    //     console.log(moviedetails)
    //     )
    //   ));
    
    // console.log(data);

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
   
   console.log("Printing movie details for backdtop:",movieDetails);

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
