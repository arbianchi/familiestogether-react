import { FETCH_REQUESTS } from '../actions/index';

const INITIAL_STATE = { all: [], request: null };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
  case FETCH_REQUESTS:
    return { ...state, all: action.payload.data };
    default: 
      return state;
  }
}