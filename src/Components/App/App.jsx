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
        }],

        playlistName: 'My Playlist',
        playlistTracks: [{
          name: 'playlistName1',
          artist: 'playlistArtist1',
          album: 'playlistAlbum1',
          id: 4
        },
        {
          name: 'playlistName2',
          artist: 'playlistArtist2',
          album: 'playlistAlbum2',
          id: 5
        },
        {
          name: 'playlistName3',
          artist: 'playlistArtist3',
          album: 'playlistAlbum3',
          id: 6
        }]
      };
      this.addTrack = this.addTrack.bind(this);
  }

  addTrack(track) {
    if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    } else {
      const tracks = Object.assign([], this.state.playlistTracks);
      tracks.push(track);
      this.setState({
        playlistTracks: tracks
      });
    }
  }

  render() {
    return (
      <div>
        <h1><span className="highlight">Vibe</span>rations</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack}/>
            <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks}/>
          </div>
        </div>
      </div>
    )
  };
}

export default App;

