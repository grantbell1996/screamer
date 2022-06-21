import { useParams, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { getSingleGenre } from "../Genres/GenreManager";
import { fetchSingleMovieFromAPI, getMovies } from "../Movies/MovieManager";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export const DecadePage = () => {
  const [movies, setMovies] = useState([]);
  const [searchedMovies, setSearchedMovies] = useState([])
  const [query, setQuery] = useState("")
  const { year } = useParams();
  const history = useHistory();

  useEffect(() => {
    fetch(
      //get the movies from the api within a decade specified in the useParams
      `https://api.themoviedb.org/3/discover/movie/?release_date.gte=${`${year}-01-01`}&release_date.lte=${`${
        parseInt(year) + 9
      }-12-31`}&with_genres=27&api_key=${process.env.REACT_APP_API_KEY}`
    )
      .then((data) => data.json())
      .then((data) => {
        getMovies().then((localData) => {
            //filter through the movies in the local database to get movies with in the decade
            //specified in the useParams and add them to the filtered array of movies from the api
          const filteredMovies = localData.filter((movie) => {
            if (
              movie.release_date > `${year}-01-01` &&
              movie.release_date < `${parseInt(year) + 9}-12-31` 
            ) {
              return fetchSingleMovieFromAPI(movie.movie_id);
            }
          });
          console.log(filteredMovies)
          //when youre ready delete the [0] and add ... before data
          setMovies([...data.results, ...filteredMovies])
          setSearchedMovies([...data.results, ...filteredMovies])  
        });
      })
      
        }, [year]);

        useEffect(
          () => {
              if (query !== "") {
                  let filteredNames = movies.filter(movie => {
                      if (movie.name?.toLowerCase().includes(query.toLowerCase())) {
                          return true
                      }
                      else {
                          return false
                      }
                  })
                  setSearchedMovies(filteredNames)
              } else {
                  setSearchedMovies(movies)
                  }
              },
              [query]
      )

  return (
    <>
    <div className="searchBar"> 
            <label htmlFor="inputMaker"> Search A Movie </label>
            <input className="searchMovie" placeholder="..." onChange={event => setQuery(event.target.value)}></input>
            </div>
      <h1>{year}'s</h1>
      <div className="genreContainer">
        {movies.map((movie) => (
          <Link
            className="movieBody"
            key={`${movie.id}`}
            to={`${year}/${movie.id}`}
          >
          
            <img
              width="200"
              src={movie.poster_path ? `https://image.tmdb.org/t/p/original/${movie.poster_path}` : `${movie.poster}`}
            /> 
            <div className="movieName">{movie.title ? movie.title : movie.name}</div>
          </Link>
        ))}
      </div>
    </>
  );
};

