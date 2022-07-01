


export const getMovies = () => {
    return fetch(`${process.env.REACT_APP_API_URL}/movies`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
        .then(response => response.json())
}

export const getSingleMovie = (movieId) => {
    return fetch(`${process.env.REACT_APP_API_URL}/movies/${movieId}`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
        .then(response => response.json())
}

export const createMovie = (movie) => {
    return fetch(`${process.env.REACT_APP_API_URL}/movies`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        },
        body: JSON.stringify(movie),
    })
        .then(response => response.json())
}

export const updateMovie = (movie, movieId) => {
    return fetch(`${process.env.REACT_APP_API_URL}/movies/${movieId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        },
        body: JSON.stringify(movie),
    })  
}

export const removeMovie = (movieId) => {
    fetch(`${process.env.REACT_APP_API_URL}/movies/${movieId}`, {
        method: "DELETE",
        headers: {
        "Content-Type": "application/json",
        "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
}

export const fetchSingleMovieFromAPI = (async (movieId) => {
    return await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_API_KEY}`
    ).then((data) => data.json())

})

export const fetchHorrorMoviesFromAPI = (async () => {
    return await fetch(
      `https://api.themoviedb.org/3/discover/movie/?with_genres=27&api_key=${process.env.REACT_APP_API_KEY}`
    ).then((data) => data.json())

})