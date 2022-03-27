import { toast } from 'react-toastify';

export function signIn(username, password) {
  return fetch("auth/token/login/", {
    method: "POST",
    headers: {
      'content-type': "application/json",

    },
    body: JSON.stringify({username, password})
  }).then((response) => {
    console.log(response);
    // If it is success
    if (response.ok) {
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
  }).then((json) => {
    //Call API Successfully
    toast(JSON.stringify(json), {type: "success"});
  }).catch((e) => {
    // Handle all Errors
    toast(e.message, { type: "error" });
  })
}