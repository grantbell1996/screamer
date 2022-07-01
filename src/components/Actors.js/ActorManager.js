


export const getActors = () => {
    return fetch(`${process.env.REACT_APP_API_URL}/actors`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
        .then(response => response.json())
}

export const getSingleActor = (actorId) => {
    return fetch(`${process.env.REACT_APP_API_URL}/actors/${actorId}`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
        .then(response => response.json())
}

export const createActor = (actor) => {
    return fetch(`${process.env.REACT_APP_API_URL}/actors`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        },
        body: JSON.stringify(actor),
    })
        .then(response => response.json())
}

export const updateActor = (actor, actorId) => {
    return fetch(`${process.env.REACT_APP_API_URL}/actors/${actorId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        },
        body: JSON.stringify(actor),
    })  
}

export const removeActor = (actorId) => {
    fetch(`${process.env.REACT_APP_API_URL}/actors/${actorId}`, {
        method: "DELETE",
        headers: {
        "Content-Type": "application/json",
        "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
}