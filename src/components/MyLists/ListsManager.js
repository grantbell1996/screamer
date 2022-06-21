


export const getLists = () => {
    return fetch("http://localhost:8000/lists", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
        .then(response => response.json())
}

export const getSingleList = (listId) => {
    return fetch(`http://localhost:8000/lists/${listId}`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
        .then(response => response.json())
}

export const createList = (list) => {
    return fetch("http://localhost:8000/lists", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        },
        body: JSON.stringify(list),
    })
        .then(response => response.json())
}

export const updateList = (list, listId) => {
    return fetch(`http://localhost:8000/lists/${listId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        },
        body: JSON.stringify(list),
    })  
}

export const removeList = (listId) => {
    fetch(`http://localhost:8000/lists/${listId}`, {
        method: "DELETE",
        headers: {
        "Content-Type": "application/json",
        "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
}