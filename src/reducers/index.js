import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import RequestsReducer from './reducer_requests';

const rootReducer = combineReducers({
  requests: RequestsReducer,
  form: formReducer
});

export default rootReducer;
