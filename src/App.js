import React, { Component } from 'react';
import {Helmet} from 'react-helmet'

import { HashRouter, Route, Switch } from 'react-router-dom';
import './scss/style.scss';
import axios from 'axios'

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  axios.defaults.baseURL = 'http://localhost:3001';
}else{
  axios.defaults.baseURL = 'http://192.168.0.40:3000';
}

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const TheLayout = React.lazy(() => import('./containers/TheLayout'));

class App extends Component {

  render() {
    return (
      <>
      <Helmet>
        <title>HueX Dashboard</title>
      </Helmet>
      <HashRouter>
          <React.Suspense fallback={loading}>
            <Switch>
              <Route path="/" name="Home" render={props => <TheLayout {...props}/>} />
            </Switch>
          </React.Suspense>
      </HashRouter>
      </>
    );
  }
}

export default App;
