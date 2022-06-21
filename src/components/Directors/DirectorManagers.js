


export const getDirectors = () => {
    return fetch("http://localhost:8000/directors", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
        .then(response => response.json())
}

export const getSingleDirector = (directorId) => {
    return fetch(`http://localhost:8000/directors/${directorId}`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
        .then(response => response.json())
}

export const createDirector = (director) => {
    return fetch("http://localhost:8000/directors", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        },
        body: JSON.stringify(director),
    })
        .then(response => response.json())
}

export const updateDirector = (director, directorId) => {
    return fetch(`http://localhost:8000/directors/${directorId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        },
        body: JSON.stringify(director),
    })  
}

export const removeDirector = (directorId) => {
    fetch(`http://localhost:8000/directors/${directorId}`, {
        method: "DELETE",
        headers: {
        "Content-Type": "application/json",
        "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
}