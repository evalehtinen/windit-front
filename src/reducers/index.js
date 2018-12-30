import { combineReducers } from 'redux';
import consumableList from './consumable_list'
import consumptionEvent from './consumption_event'
import user from './user'

export default combineReducers({
  consumableList,
  consumptionEvent,
  user,
});
