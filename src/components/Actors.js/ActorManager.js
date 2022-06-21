


export const getActors = () => {
    return fetch("http://localhost:8000/actors", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
        .then(response => response.json())
}

export const getSingleActor = (actorId) => {
    return fetch(`http://localhost:8000/actors/${actorId}`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
        .then(response => response.json())
}

export const createActor = (actor) => {
    return fetch("http://localhost:8000/actors", {
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
    return fetch(`http://localhost:8000/actors/${actorId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        },
        body: JSON.stringify(actor),
    })  
}

export const removeActor = (actorId) => {
    fetch(`http://localhost:8000/actors/${actorId}`, {
        method: "DELETE",
        headers: {
        "Content-Type": "application/json",
        "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
}