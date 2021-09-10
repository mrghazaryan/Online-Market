import API from "../api";

export function getUsers(successCb) {
  API.getAction(
    'users',
    (users) => successCb(users),
    (err) => {
      console.log(err);
    }
  );
} 
