import React, {Component} from 'react';
import Card from '../../Components/Card/Card';
import Spinner from '../../Components/Spinner/Spinner';

let search_Term='';

class SearchResults extends Component{
    constructor(){
      super();
      this.state={
        search_results:[],
        page:1,
        totalPages:null,
        search_Term:null
      }
    }
  componentWillMount(){
    const query = new URLSearchParams(this.props.location.search);

    for(let param of query.entries()){
      if(param[0]==="search"){
        this.retrieveData(param[1])
      }
      else{
        window.alert("Something went wrong... Sorry...");
      }
    }
  }


  shouldComponentUpdate(prevProps,prevState){
    return prevState.search_Term!==this.state.search_Term;
  }


      retrieveData=(searchTerm=this.state.search_Term)=>{
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=c775303404fc7d314a5190e0708c61bf&language=en-US&query=${searchTerm}&page=${this.state.page}&include_adult=false`)
              .then(data=>{
                return data.json()})
              .then(data=>{this.setState(()=>{
                  return{
                    search_results:data.results,
                    page:data.page,
                    totalPages:data.total_pages,
                    search_Term:searchTerm
                  }
              })})
    }

  showMovieHandler = (movieDetails) =>{
    
    this.props.history.push({
      pathname:'/movie_details',
      search:`?id=${movieDetails.id}`
    });
  }
  
  render(){
    let display_results=<div style={{height:"100vh", display:"flex",alignItems:"center"}}><Spinner/></div>

    if(this.state.search_results){
        
        display_results = <div style={{height:"100%",width:"80%", display:"flex",flexFlow:"row wrap",justifyContent:"center",margin:"0 auto"}}>
              
              {this.state.search_results.map((movieDetails,i)=>{
               return(<div style={{textAlign:"center"}} key={movieDetails.id}>
                          <Card 
                              movieDetails={movieDetails}
                              showMovie={(id)=>this.showMovieHandler(id)}/>
                      </div>)})}</div>
    }
    
 	return(
 			<div style={{paddingTop:"4.6em", minHeight:"100vh"}}>
        <h1 style={{margin:"20px", textAlign:"center"}}>Search results for {this.state.search_Term}</h1>
				{display_results}
			</div>
 		);
  }
 }


export default SearchResults;