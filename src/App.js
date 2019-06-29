import React, { Component } from 'react';
import TopRated from './Components/TopRated/TopRated';
// import API_KEY from 'config.js'
import Jumbatron from './Components/Jumbatron/Jumbatron';
import './App.css';

const api_key='c775303404fc7d314a5190e0708c61bf';
const urls=[
          `https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&language=en-US&page=1`,
          `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`,
          `https://api.themoviedb.org/3/movie/now_playing?api_key=${api_key}&language=en-US&page=1`
          ]

class App extends Component{
  constructor(){
    super();
     this.state={
          top_rated_list:[],
         popular_list:[],
         now_playing_list:[]
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
  }

  render(){
    let movieDetails=this.state.top_rated_list[13];
   let poster='';
    if(movieDetails!==undefined)
    poster=movieDetails.poster_path;
   
  return (
    <div className="App">
      <h1>Hello World</h1>
      <Jumbatron poster={poster}/>
      <TopRated toprated={this.state.top_rated_list}/>
    </div>
  );
}
}

export default App;
