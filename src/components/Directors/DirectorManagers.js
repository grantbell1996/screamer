


export const getDirectors = () => {
    return fetch(`${process.env.REACT_APP_API_URL}/directors`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
        .then(response => response.json())
}

export const getSingleDirector = (directorId) => {
    return fetch(`${process.env.REACT_APP_API_URL}/directors/${directorId}`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
        .then(response => response.json())
}

export const createDirector = (director) => {
    return fetch(`${process.env.REACT_APP_API_URL}/directors`, {
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
    return fetch(`${process.env.REACT_APP_API_URL}/directors/${directorId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        },
        body: JSON.stringify(director),
    })  
}

export const removeDirector = (directorId) => {
    fetch(`${process.env.REACT_APP_API_URL}/directors/${directorId}`, {
        method: "DELETE",
        headers: {
        "Content-Type": "application/json",
        "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
}