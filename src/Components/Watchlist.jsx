import React,{useState} from 'react';
import Header from './Header';
import axios from 'axios';


function Watchlist() {


  const [randomMovie,setRandomMovie] = useState({});
  axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=ef2617c287ce049fcc04572e55ad70db')
  .then(function (response) {
    // handle success
    let movies = response.data.results;
    let randomMovie = movies[Math.floor(Math.random()*20)];
    console.log(randomMovie.backdrop_path);
    // setmovieObj(randomMovie);
  })




  return (
    <div>
      <Header/>
      <p>Watchlist Page</p>
      <div>
      <img alt="Random Movie" src={`https://image.tmdb.org/t/p/w500${randomMovie.backdrop_path}`} />

      
      </div>

      </div>
  )
}

export default Watchlist