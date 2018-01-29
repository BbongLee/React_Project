import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';

const movieTitles = [
  "Matrix",
  "Full Metal Jacket",
  "Oldboy",
  "Star Wars"
]

const movieImages = [
  "https://images-na.ssl-images-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg",
  "https://images-na.ssl-images-amazon.com/images/I/81XARapmq6L._RI_SX200_.jpg",
  "https://images-na.ssl-images-amazon.com/images/I/91ONQ8FNHJL._SY445_.jpg",
  "http://imgc.allpostersimages.com/img/posters/star-wars-the-force-awakens-one-sheet_u-L-F8G58H0.jpg",
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <Movie title={movieTitles[0]} poster={movieImages[0]}/> 
        {/* MovieTitle ..라는 컴포넌트 불러오기 */}
        <Movie title={movieTitles[1]} poster={movieImages[1]}/>
        <Movie title={movieTitles[2]} poster={movieImages[2]}/>
        <Movie title={movieTitles[3]} poster={movieImages[3]}/>
      </div>
    );
  }
}

export default App;
