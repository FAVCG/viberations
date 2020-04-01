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
      this.removeTrack = this.removeTrack.bind(this);
      this.updatePlaylistName = this.updatePlaylistName.bind(this);
      this.savePlaylist = this.savePlaylist.bind(this);
      this.search = this.search.bind(this);
  }

  addTrack(track) {
    if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    } else {
      let tracks = this.state.playlistTracks;
      tracks.push(track);
      this.setState({
        playlistTracks: tracks
      });
    }
  }

  removeTrack(track) {
    let tracks = this.state.playlistTracks;
      tracks = tracks.filter(currentTrack => currentTrack.id !== track.id);

      this.setState({
        playlistTracks: tracks
      });
  }

  updatePlaylistName(name) {
    this.setState({playlistName: name});
  }

  savePlaylist() {
    // alert("I am linked to the button teehee")
    const trackUris = this.state.playlistTracks.map(track => track.uri);
  }

  search(term) {
    console.log(term);
  }

  render() {
    return (
      <div>
        <h1><span className="highlight">Vibe</span>rations</h1>
        <div className="App">
          <SearchBar onSearch={this.search}/>
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack}/>
            <Playlist
            playlistName={this.state.playlistName}
            playlistTracks={this.state.playlistTracks}
            onRemove={this.removeTrack}
            onNameChange={this.updatePlaylistName}
            onSave={this.savePlaylist} />
          </div>
        </div>
      </div>
    )
  };
}

export default App;

