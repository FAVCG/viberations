import React from 'react';
import logo from './logo.svg';
import './App.css';
import Playlist from '../Playlist/Playlist.jsx';
import SearchBar from '../SearchBar/SearchBar.jsx';
import SearchResults from '../SearchResults/SearchResults.jsx';

class App extends React.Component {
  constructor(props){
    super(props);
      this.state = {
        // here we are hard coding song info
        searchResults: [{
          name: 'Hurricane',
          artist: 'Luke Combs',
          album: 'This one for you',
          id: 1
        },
        {
          name: 'Body like a Back Road',
          artist: 'Sam Hunt',
          album: 'Southside',
          id: 2
        },
        {
          name: 'Show Me',
          artist: 'Alina Baraz',
          album: 'Urban Flora',
          id: 3
        }]
      }
  }
  render() {
    return (
      <div>
        <h1><span className="highlight">Vibe</span>rations</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults}/>
            <Playlist />
          </div>
        </div>
      </div>
    )
  };
}

export default App;

