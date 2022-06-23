import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getSingleDirector } from "./Directors/DirectorManagers";
import "./HomePage.css"
import { getMovies, getSingleMovie } from "./Movies/MovieManager";

export const HomePage = () => {

  const [movie, setMovie] = useState({})
  const [director, setDirector] = useState({})
  const movieId = (Math.floor(Math.random() * 3) + 1)
  const directorId = (Math.floor(Math.random() * 3) + 1)

  useEffect(() => {
    getSingleMovie(movieId).then((data) => {
      setMovie(data);
    });
  }, []);

  useEffect(() => {
    getSingleDirector(directorId).then((data) => {
      setDirector(data);
    });
  }, []);


  return (
    <>

      <div className="editor_pick_box" style={{backgroundImage: movie.poster}}>
        <div> 
          <div className="editorHeader">Editor's Pick</div>
          <div className="movie_details"> 
            <Link className="movie_title">{movie.name}</Link>
              <div className="movie_director">{movie.director?.first_name} {movie.director?.last_name}</div>
          </div>
        <div className="movie_synopsis">{movie.synopsis}</div>
        </div>
      </div>
      <div className="bottom_elements"> 
        <div className="director_pick_box" style={{backgroundImage: movie.poster}}>
          <div> 
            <div className="director_details"> 
              <Link className="director_name">{director.first_name} {director.last_name}</Link>
            </div>
          </div>
        </div>
        <div className="unspecified">
          <Link className="unspecified_name">Put Something Here</Link>
        </div>
      </div>
    </>
  )
}
