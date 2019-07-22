import React, {Component} from 'react';
import {Route,Switch} from 'react-router-dom';
import HomePage from './Containers/HomePage/HomePage';
import Layout from './Containers/Layout/Layout';
import SearchResults from './Containers/SearchResults/SearchResults';

class App extends Component{

  render(){
    return(
        <Layout>
          <Switch>
            <Route to="/" exact component={HomePage}/>
            <Route to="/search_results" exact componet={SearchResults}/>
          </Switch>
        </Layout>
      );
  }
}

export default App