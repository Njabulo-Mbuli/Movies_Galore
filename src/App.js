import React, { Component } from 'react';
import Jumbatron from './Components/Jumbatron/Jumbatron'
import './App.css';

const api_key='c775303404fc7d314a5190e0708c61bf';

class App extends Component{
  constructor(){
    super();

    Promise.all([
        fetch(`https://api.themoviedb.org/3/movie/latest?api_key=${api_key}&language=en-US`),
        fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&language=en-US&page=1`),
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`)
      ]).then(([latest,top_rated,popular])=>{
        console.log("latest: ",latest);
        console.log("top_rated: ",top_rated.json());
        console.log("popular: ",popular.json());
      });
    

    this.state={
      name:''
    }
  }
  render(){
  return (
    <div className="App">
      <h1>Hello World</h1>
      <Jumbatron/>
    </div>
  );
}
}

export default App;
