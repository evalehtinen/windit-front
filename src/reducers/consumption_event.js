const POST_CONSUMPTION_EVENT = 'windit-front/consumptionEvent/LOAD';
const POST_CONSUMPTION_EVENT_SUCCESS = 'windit-front/consumptionEvent/LOAD_SUCCESS';
const POST_CONSUMPTION_EVENT_FAIL = 'windit-front/consumptionEvent/LOAD_FAIL';
const SELECT_CONSUMPTION = 'windit-front/consumptionEvent/SELECT_CONSUMPTION';

export default function consumptionEvent(state = { selectedConsumption: {} }, action) {
  switch (action.type) {
    case POST_CONSUMPTION_EVENT:
      console.log('POST_CONSUMPTION called');
      return { ...state, loading: true };
    case POST_CONSUMPTION_EVENT_SUCCESS:
      console.log('SUCCESS');
      return {
        ...state,
        loading: false,
      };
    case POST_CONSUMPTION_EVENT_FAIL:
      console.log('FAIL');
      return {
        ...state,
        loading: false,
        error: 'GET_CONSUMABLES_FAIL',
      };
    case SELECT_CONSUMPTION:
      console.log('Consumption selected', action.consumable);
      return {
        ...state,
        selectedConsumption: action.consumable,
      };
    default:
      return state;
  }
}

// export const postConsumable = consumable => ({
//   type: POST_CONSUMPTION,
//   payload: {
//     request: {
//       // url: '/ingredient',
//     },
//   },
// })

export const setSelectedConsumption = consumable => ({
  type: SELECT_CONSUMPTION,
  consumable,
})
