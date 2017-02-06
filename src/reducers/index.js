import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import TokenReducer from './token';

const rootReducer = combineReducers({
  requests: TokenReducer,
  form: formReducer
});

export default rootReducer;
