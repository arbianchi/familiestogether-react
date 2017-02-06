import axios from 'axios';

export const FETCH_TOKEN = 'FETCH_TOKEN';

export function fetchToken(props) {
  const request = axios.post("http://families-together.herokuapp.com/login", props);
  return {
    type: FETCH_TOKEN,
    payload: request 
  };
}
