import axios from 'axios';

export const FETCH_REQUESTS = 'FETCH_REQUESTS';
const ROOT_URL = 'http://reduxblog.herokuapp.com/api';



export function fetchRequests() {
  const request = axios.post("http://b106753d.ngrok.io/login", {
    email: "r@r.com",
    password: "password"
  })
  .then( resp => {
    const token = resp.data.token;
    
    axios.get(`http://b106753d.ngrok.io/requests.json`, {
      headers: {'Authorization': token }
    })
    .then( json  => {
      return json
    })
    .catch( err => console.log( err )); 
    })
  .catch( err => console.log( err ));
  
  return {
    type: FETCH_REQUESTS,
    payload: json
  };
  
}