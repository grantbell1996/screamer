import React, { useEffect, useState } from "react";
import { getSingleActor } from "./Actors.js/ActorManager";
import { getSingleDirector } from "./Directors/DirectorManagers";
import "./OurPicksPage.css";
import editorHeader from "../images/editorheader.png"
import { getMovies, getSingleMovie } from "./Movies/MovieManager";

export const OurPicksPage = () => {
  const [movie, setMovie] = useState({});
  const [actor, setActor] = useState({});
  const [director, setDirector] = useState({});
  const movieId = Math.floor(Math.random() * 5) + 1;
  const directorId = Math.floor(Math.random() * 3) + 1;
  const actorId = Math.floor(Math.random() * 4) + 1;

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

  useEffect(() => {
    getSingleActor(actorId).then((data) => {
      setActor(data);
    });
  }, []);

  return (
    <>
      <div className="editor_pick_box">
        <img className="editor_header" src={editorHeader}/>
        <div className="movie_top_details"></div>
        <div className="movie_pick_body">
          <div className="movie_pick_body_l">
            <img className="editor_pick_movie_bg" src={movie.poster} />
          </div>
          <div className="movie_pick_body_c">
            <div className="movie_title">{movie.name}</div>
            <div className="movie_director">
              {movie.director?.first_name} {movie.director?.last_name}
            </div>
            <div className="movie_date">{movie.release_date}</div>
          </div>
          <div className="movie_pick_body_r">
            <div className="movie_synopsis">{movie.synopsis}</div>
          </div>
        </div>
      </div>
      <div className="bottom_elements">
        <div className="director_pick_box">
          <div>
            <div className="director_details">
              <div className="director_name">
                {director.first_name} {director.last_name}
              </div>
              <div className="director_dates">
                {director.birth_date} - {director?.death_date}
              </div>
              <img className="director_image" src={director.image} />
              <div className="director_bio">{director.bio}</div>
            </div>
          </div>
        </div>
        <div className="actor_pick_box">
          <div>
            <div className="actor_details">
              <div className="actor_name">
                {actor.first_name} {actor.last_name}
              </div>
              <div className="actor_dates">
                {actor.birth_date} - {actor?.death_date}
              </div>
              <img className="actor_image" src={actor.image} />
              <div className="actor_bio">{actor.bio}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
