import API from "../api";

export function createUser(user) {
  API.postAction(
    'users',
    user,
    (user) => console.log(user),
    (err) => console.log(err)
  );
} 
