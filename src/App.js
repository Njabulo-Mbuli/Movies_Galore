import React, { Component } from 'react';
import Jumbatron from './Components/Jumbatron/Jumbatron'
import './App.css';

const api_key='c775303404fc7d314a5190e0708c61bf';
const urls=[
          `https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&language=en-US&page=1`,
          `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`
          ]

class App extends Component{
  constructor(){
    super();
    let data ={
      'top_rated':null,
     'popular':''
    };

    const promises = urls.map(url=>fetch(url));

    Promise.all(promises).then(responses=>{
      responses.forEach(response=>console.log(response.url))
      return responses;
    }).then(responses=>Promise.all(responses.map(r=>r.json())))
    .then(users=>users.forEach(user=>
      user.results.map((moviedetails,count)=>
        console.log(moviedetails)
        )
      ));
    
    console.log(data);

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
