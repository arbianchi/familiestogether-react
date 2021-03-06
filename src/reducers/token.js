import { FETCH_TOKEN } from '../actions/index';

const INITIAL_STATE = { token: null, request: null };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
  case FETCH_TOKEN:
    console.log('action', action.payload)
    return { ...state, token: '' };
    default: 
      return state;
  }
}