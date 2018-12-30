import { combineReducers } from 'redux';
import consumableList from './consumable_list'
import consumptionEvent from './consumption_event'

export default combineReducers({
  consumableList,
  consumptionEvent,
});
