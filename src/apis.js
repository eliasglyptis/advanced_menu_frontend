import { toast } from 'react-toastify';

function request(path, {data = null, token = null, method="GET"}) {
  return fetch(path, {
    method,
    headers: {
      Authorization: token ? `Token ${token}` : "",
      'Content-type': "application/json",

    },
    body: method !== "GET" && method !== "DELETE" ? JSON.stringify(data) : null
  }).then((response) => {
    // If it is success
    if (response.ok) {
      if(method === "DELETE") {
        return true;
      }
      return response.json();
    }
    // Otherwise, if there is an error
    return response.json().then((json) => {
      // handle JSON error response by server
      if (response.status === 400) {
        const errors = Object.keys(json).map(
          (k) => `${(json[k].join(" "))}`
        );
        throw new Error(errors.join(" "))
      }
      throw new Error(JSON.stringify(json));
    }).catch((e) => {
      if (e.name === "SyntaxError") {
        throw new Error(response.statusText);
      }
      throw new Error(e);
    })
  })
  .catch((e) => {
    // Handle all Errors
    toast(e.message, { type: "error" });
  })
}

export function signIn(username, password) {
  return request("/auth/token/login", {
    data: {username, password},
    method: "POST",
  })
}

export function register(username, password) {
  return request("/auth/users/", {
    data: {username, password},
    method: "POST",
  })
}