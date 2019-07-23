import React, {Component} from 'react';
import {Route,Switch} from 'react-router-dom';
import HomePage from './Containers/HomePage/HomePage';
import Layout from './Containers/Layout/Layout';
import SearchResults from './Containers/SearchResults/SearchResults';
import MovieDetails from './Containers/MovieDetails/MovieDetails';

class App extends Component{

  render(){
    return(
        <Layout>
          <Switch>
            <Route path="/" exact component={HomePage}/>
            <Route path="/movie_details" component={MovieDetails}/>
            <Route path="/search_results" component={SearchResults}/>
          </Switch>
        </Layout>
      );
  }
}

export default App