import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { fetchSingleMovieFromAPI, getSingleMovie } from "./MovieManager";
import { getCurrentUser, getSingleUser } from "../Users/UserManager";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export const MoviePage = () => {
  const [movie, setMovie] = useState({});
  const [user, setUser] = useState({});
  const { movieId } = useParams();
  const history = useHistory()

  useEffect(() => {
    fetchSingleMovieFromAPI(movieId)
      .then(data => {
        getSingleMovie(movieId)
        .then(localData => {
        setMovie(...data.results, ...localData)
      })})
  }, [movieId]);

  useEffect(() => {
    getSingleMovie(movieId)
      .then(data => {
        setMovie(data)
      })
  }, [movieId]);

  useEffect(() => {
    getCurrentUser()
      .then(data => {
        setUser(data)
      })
  }, []);

  return (
    <>
    <div>hello</div>
      <img
              width="200"
              src={movie.poster_path ? `https://image.tmdb.org/t/p/original/${movie.poster_path}` : `${movie.poster}`}
            /> 
      <div className="movieName">{movie.name}</div>
      <div className="movieDirector">
        {movie.director?.first_name} {movie.director?.last_name}
      </div>
      <div className="movieReleaseYear">{movie.release_date}</div>
      <div className="movie_actor">
        {movie.actor?.map((actorObject) => {
          return `${actorObject.first_name} ${actorObject.last_name}`;
        })}
      </div>
      {movie?.user?.id === user.id ? <button className="edit_button" onClick={ () => history.push(`/edit/${movie.id}`) }>Edit Movie</button> : ""}
    </>
  );
};
