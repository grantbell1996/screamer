export const registerUser = (user) => {
  return fetch(`${process.env.REACT_APP_API_URL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(user)
  })
    .then(res => res.json())
}

export const loginUser = (user) => {
  return fetch(`${process.env.REACT_APP_API_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(user)
  })
    .then(res => res.json())
}
