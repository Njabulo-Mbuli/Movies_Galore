import React, {Component} from 'react';
import Card from '../../Components/Card/Card';
import Spinner from '../../Components/Spinner/Spinner';
import './SearchResults.css';


class SearchResults extends Component{
    constructor(){
      super();
      this.state={
        search_results:null,
        loadpage:1,
        currentPage:1,
        totalPages:null,
        search_Term:null
      }
      this.addCount=0;
    }

  componentWillMount(){
    
    const query = new URLSearchParams(this.props.location.search);

    for(let param of query.entries()){
      if(param[0]==="search"){
        this.retrieveData(param[1]);
      }
      else{
        window.alert("Something went wrong... Sorry...");
      }
    }
  }


  shouldComponentUpdate(prevProps,prevState){
    let query = new URLSearchParams(this.props.location.search);
    let checkValue=query.get("search");
 
    if(this.state.search_Term!==checkValue){
      this.addCount=0;
      this.retrieveData(checkValue);
    }
    setTimeout(()=>{
      let leggo = new URLSearchParams(this.props.location.search);

      leggo=leggo.get("search");
      if(leggo!=this.state.search_Term){
        this.retrieveData(leggo)
        window.scroll({top:0,left:0,behaviour:"smooth"});
      }
    },100);
     
    return checkValue!==this.state.search_Term||prevState!==this.state;
  }


  retrieveData=(searchTerm=this.state.search_Term)=>{
    window.scroll({top:0,left:0,behaviour:"smooth"});
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=c775303404fc7d314a5190e0708c61bf&language=en-US&query=${searchTerm}&page=${this.state.currentPage+this.addCount}&include_adult=false`)
            .then(data=>{
              return data.json()})
            .then(data=>{this.setState(()=>{
                return{
                  search_results:data.results,
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

  pageDownHandler=()=>{
    if(this.state.currentPage+this.addCount>1){
      this.addCount--
      this.retrieveData(this.state.search_Term);
    }
  }

  pageUpHandler=()=>{
    
    if(this.state.currentPage+this.addCount<this.state.totalPages){
      this.addCount++
      this.retrieveData(this.state.search_Term);
    }
  }
  
  render(){
    let display_results=<div style={{height:"100vh", display:"flex",alignItems:"center"}}><Spinner/></div>
    let classNext=(this.state.totalPages>this.state.currentPage+this.addCount)?"paginationOn":"paginationOff";
    let classPrevious=(this.addCount+this.state.currentPage>1)?"paginationOn":"paginationOff";

    if(this.state.search_results)  
    if(this.state.search_results.length>0){
        display_results = <div>
                            <h1 style={{margin:"20px", textAlign:"center"}}>Search results for {this.state.search_Term}</h1>
                             {this.state.totalPages>1?<div style={{textAlign:"center"}}><h3>Page   {this.state.currentPage+this.addCount} of {this.state.totalPages}</h3></div>:<div style={{textAlign:"center"}}><h3>Only one page of results found...</h3></div>}
                              <div style={{height:"100%",width:"80%", display:"flex",flexFlow:"row wrap",justifyContent:"center",margin:"0 auto"}}>
                             {this.state.search_results.map((movieDetails,i)=>{
                               return(<div style={{textAlign:"center"}} key={movieDetails.id}>
                                          <Card 
                                              movieDetails={movieDetails}
                                              showMovie={(id)=>this.showMovieHandler(id)}/>
                                      </div>)})}
                              
                            </div>
                            <div style={{textAlign:"center"}}>
                               
                                <button 
                                  className={`paginationStyle ${classPrevious}`}
                                  onClick={()=>{this.pageDownHandler()}}>Previous</button>
                                  {this.addCount+this.state.currentPage} of {this.state.totalPages}
                                <button 
                                  className={`paginationStyle ${classNext}`}
                                  onClick={()=>{this.pageUpHandler()}}>Next</button>
                            </div>
                          </div>
    }else{
      display_results=<h3 style={{textAlign:"center"}}>Sorry there are no results matching {this.state.search_Term}</h3>
    }
    
 	return(
 			<div style={{paddingTop:"4.6em", minHeight:"100vh"}}>
        
				{display_results}
			</div>
 		);
  }
 }

export default SearchResults;