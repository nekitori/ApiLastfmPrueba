import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Artist from './components/TopArtist'
class App extends Component {
  render() {
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Top Artist</h1>
        </header>
        <p className="App-intro">
        example to how implement the lastfm API
        </p>
        <Artist/>
      </div>
    );
  }
}

export default App;
