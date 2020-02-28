import { combineReducers } from 'redux';

import ligth from './ligth';
import appReducer from './appReducer';
import registrReducer from './registrReducer';

export default combineReducers({
  ligth,
  appReducer,
  registrReducer
});
