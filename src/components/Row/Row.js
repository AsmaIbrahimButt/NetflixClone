import axios from './../../axios';
import React, { useEffect, useState } from 'react'
import "./Row.css";

const Row = ({title,fetchUrl,isLargeRow=false}) => {
  const baseURL="https://image.tmdb.org/t/p/original/";

const [movies,setMovies]=useState([]);
useEffect(()=>{
async function fetchData() {
const request=await axios.get(fetchUrl);
setMovies(request.data.results);
return request;
  }

fetchData(); 
},[fetchUrl]);

console.log(movies);

  return (
    <div className='row'>
     <h2>{title}</h2>  
     <div className='row__posters'>
     {movies.map(movies=>(
      ((isLargeRow && movies.poster_path) || (!isLargeRow && movies.backdrop_path) )&& (
      <img 
      className={`row__poster ${isLargeRow && "row__posterLarge"}`}
      key={movies.id}
      src={`${baseURL}${isLargeRow ? movies.poster_path : movies.backdrop_path}`} alt={movies.name}></img>
     ))
  )}
     </div>
    
    </div>
  )
}

export default Row
