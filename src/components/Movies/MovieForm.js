import React, { useState, useEffect } from "react"
import { useHistory } from 'react-router-dom'
import { getActors } from "../Actors.js/ActorManager.js"
import { getDirectors } from "../Directors/DirectorManagers.js"
import { getGenres } from "../Genres/GenreManager.js"
import { createMovie, getMovies } from './MovieManager.js'
import "./MovieForm.css"


export const MovieForm = () => {
    const history = useHistory()
    const [directors, setDirectors] = useState([])
    const [actors, setActors] = useState([])
    const [genres, setGenres] = useState([])

    /*
        Since the input fields are bound to the values of
        the properties of this state variable, you need to
        provide some default values.
    */
    const [movie, setMovie] = useState({
        name: "",
        director: 0,
        release_date: "",
        run_time: 0,
        filming_location: "",
        synopsis: "",
        user: 0,
        trailer: "",
        poster: "",
        actor: ""
    })

    useEffect(() => {
        getDirectors()
            .then((data) => {
                setDirectors(data)
            })
    }, [])

    useEffect(() => {
        getActors()
            .then((data) => {
                setActors(data)
            })
    }, [])

    useEffect(() => {
        getGenres()
            .then((data) => {
                setGenres(data)
            })
    }, [])

    const changeMovieState = (evt) => {
        evt.preventDefault()
        //newPedal is the variable holding the new object
        const newMovie = {...movie}
        newMovie[evt.target.name] = evt.target.value
        setMovie(newMovie)
    }

    return (
        <> 
        <form className="movie_form">
            <h2 className="movie_form__title">Register New Movie</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Name: </label>
                    <input type="text" name="name" required autoFocus className="form-control"
                        
                        onChange={changeMovieState}
                    />
                </div>
            </fieldset>
            <div>
                <select
                            required autoFocus
                            className="directorBar"
                        onChange={
                            (evt) => {
                                const copy = {...movie}
                                copy.director = parseInt(evt.target.value)
                                setMovie(copy)
                            }
                        }>
                            <option className="directorBar" value="0">Choose a Director</option>
                            {
                                directors.map(
                                    (director) => {
                                return <option key={director.id} className="directorBar" value={director.id}>{director.first_name} {director.last_name}</option>   
                                    }
                                )
                                }
                                
                        </select>
                        </div>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="release_date">Release Date: </label>
                    <input type="date" name="release_date" required autoFocus className="form-control"
                        
                        onChange={changeMovieState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="run_time">Run Time: </label>
                    <input type="number" name="run_time" required autoFocus className="form-control"
                        
                        onChange={changeMovieState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="filming_location">Filming Location: </label>
                    <input type="text" name="filming_location" required autoFocus className="form-control"
                        
                        onChange={changeMovieState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="synopsis">Synopsis: </label>
                    <input type="text" name="synopsis" required autoFocus className="form-control"
                        
                        onChange={changeMovieState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="trailer">Trailer: </label>
                    <input type="text" name="trailer" required autoFocus className="form-control"
                        
                        onChange={changeMovieState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="poster">Poster: </label>
                    <input type="text" name="poster" required autoFocus className="form-control"
                        
                        onChange={changeMovieState}
                    />
                </div>
            </fieldset> 
            <div>
                <select
                            required autoFocus
                            className="actorBar"
                        onChange={
                            (evt) => {
                                const copy = {...movie}
                                copy.actor = parseInt(evt.target.value)
                                setMovie(copy)
                            }
                        }>
                            <option className="actorBar" value="0">Choose Actors</option>
                            {
                                actors.map(
                                    (actor) => {
                                return <option key={actor.id} className="actorBar" value={actor.id}>{actor.first_name} {actor.last_name}</option>   
                                    }
                                )
                                }
                                
                        </select>
                        </div>

            

            <button type="submit"
                onClick={evt => {
                    // Prevent form from being submitted
                    evt.preventDefault()

                    const newMovie = {
                        name: movie.name,
                        director: movie.director,
                        release_date: movie.release_date,
                        run_time: parseInt(movie.run_time),
                        filming_location: movie.filming_location,
                        synopsis: movie.synopsis,
                        user: parseInt(localStorage.getItem("auth_token")),
                        trailer: movie.trailer,
                        poster: movie.poster,
                        actor: movie.actor
                        
                    }

                    // Send POST request to your API
                    createMovie(newMovie, )
                        .then(() => history.push("/home"))
                }}
                className="submit">Create</button>
        </form>
    </>
    )
}