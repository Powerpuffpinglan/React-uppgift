import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter,
} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Business from './case/bar/screen/Business';
import Weather from './case/v\u00E4der/screen/WeatherList';
import HomeSite from './case/hem/HomeSite';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div class= "row">
          <i class="fas fa-sun App-logo mx-auto" style={{fontSize:80, color:'yellow'}}></i><i class="fas fa-beer App-logo mx-auto" style={{fontSize:80, color:'yellow'}}></i></div>
          <h1 className="App-title">Öl och Väder</h1><br/>
          <nav class="navbar navbar-expand-lg">
          <a class="navbar-brand" href="/hem">Meny</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="/bar">Barer <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/väder">Väder</a>
          </li>
        </ul>
      </div>
    </nav>
</header>
<div class="col-sm-8 offset-sm-2 contentPadding" style={{backgroundColor: 'white', minHeight: '80vh'}}>
            { /*Lägg till alla sidor som skall kunna navigeras ifrån!*/ }
            <Route path="/hem" component={HomeSite}/>
            <Route path="/bar" component={Business}/>
            <Route path="/väder" component={Weather}/>
          </div>   
      </div>
    );
  }
}

export default App;
