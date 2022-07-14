import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { getMovies } from "../Movies/MovieManager";
import { createList } from "./ListsManager";
import "./ListForm.css";

export const ListForm = () => {
  const history = useHistory();
  /*
        Since the input fields are bound to the values of
        the properties of this state variable, you need to
        provide some default values.
    */
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [list, setList] = useState({
    title: "",
    movie_id: 0,
  });

  useEffect(() => {
    getMovies().then((data) => {
      setMovies(data);
      setSearchedMovies(data);
    });
  }, []);

  useEffect(() => {
    if (query !== "") {
      let filteredMovies = movies.filter((movie) => {
        if (movie.name.toLowerCase().includes(query.toLowerCase())) {
          return true;
        } else {
          return false;
        }
      });
      setSearchedMovies(filteredMovies);
    } else {
      setSearchedMovies(movies);
    }
  }, [query]);

  const changeListState = (evt) => {
    evt.preventDefault();
    //newPedal is the variable holding the new object
    const newList = { ...list };
    newList[evt.target.name] = evt.target.value;
    setList(newList);
  };

  return (
    <>
      <div className="listFormContainer">
        <div>
          <div className="listFormTitle">
            <label htmlFor="title">Title: </label>
            <input
              type="text"
              name="title"
              required
              autoFocus
              className="titleBar"
              onChange={changeListState}
            />
          </div>
        </div>
        <div>
          <select
            required
            autoFocus
            className="movieDropDown"
            onChange={(evt) => {
              const copy = { ...list };
              copy.movie_id = parseInt(evt.target.value);
              setList(copy);
            }}
          >
            <option className="listMovieBar" value="0">
              Choose a movie
            </option>
            {movies.map((movie) => {
              return (
                <option className="directorBar" value={movie.id}>
                  {movie.name}
                </option>
              );
            })}
          </select>
        </div>
        {/* <div className="searchBar"> 
            <label htmlFor="inputMaker"> Search A Movie</label>
            <input className="searchMaker" placeholder="..." onChange={event => setQuery(event.target.value)}></input>
            </div>
            <div>{movies.name}</div> */}
        <button
          type="submit"
          onClick={(evt) => {
            // Prevent form from being submitted
            evt.preventDefault();

            const newList = {
              title: list.title,
              user: parseInt(localStorage.getItem("auth_token")),
              movie_id: list.movie,
            };

            // Send POST request to your API
            createList(newList).then(() => history.push("/my_lists"));
          }}
          className="listFormCreateButton"
        >
          Create
        </button>
      </div>
    </>
  );
};
