import axios from 'axios';

export const FETCH_TOKEN = 'FETCH_TOKEN';

export function fetchToken() {
  const request = axios.post("http://b106753d.ngrok.io/login", {
    email: "r@r.com",
    password: "password"
  })
  
  return {
    type: FETCH_TOKEN,
    payload: request 
  };
  
}