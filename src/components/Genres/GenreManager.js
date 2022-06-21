


export const getGenres = () => {
    return fetch("http://localhost:8000/genres", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
        .then(response => response.json())
}

export const getSingleGenre = (genreId) => {
    return fetch(`http://localhost:8000/genres/${genreId}`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
        .then(response => response.json())
}

export const createGenre = (genre) => {
    return fetch("http://localhost:8000/genres", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        },
        body: JSON.stringify(genre),
    })
        .then(response => response.json())
}

export const updateGenre = (genre, genreId) => {
    return fetch(`http://localhost:8000/genres/${genreId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        },
        body: JSON.stringify(genre),
    })  
}

export const removeGenre = (genreId) => {
    fetch(`http://localhost:8000/genres/${genreId}`, {
        method: "DELETE",
        headers: {
        "Content-Type": "application/json",
        "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
}