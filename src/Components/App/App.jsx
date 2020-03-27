import React from 'react';
import logo from './logo.svg';
import './App.css';
import Playlist from '../Playlist/Playlist.jsx';
import SearchBar from '../SearchBar/SearchBar.jsx';
import SearchResults from '../SearchResults/SearchResults.jsx';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1><span className="highlight">Vibe</span>rations</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults />
            <Playlist />
          </div>
        </div>
      </div>
    )
  };
}

export default App;

