import React, {Component} from 'react';
import {Route,Switch} from 'react-router-dom';
import HomePage from './Containers/HomePage/HomePage';
import Layout from './Containers/Layout/Layout';

class App extends Component{

  render(){
    return(
        <Layout>
          <Switch>
            <Route to="/" exact component={HomePage}/>
          </Switch>
        </Layout>
      );
  }
}

export default App