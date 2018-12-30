const GET_CONSUMABLE_LIST = 'windit-front/consumableList/LOAD';
const GET_CONSUMABLE_LIST_SUCCESS = 'windit-front/consumableList/LOAD_SUCCESS';
const GET_CONSUMABLE_LIST_FAIL = 'windit-front/consumableList/LOAD_FAIL';

export default function consumableList(state = { consumableList: [] }, action) {
  switch (action.type) {
    case GET_CONSUMABLE_LIST:
      console.log('GET_CONSUMABLES LIST called');
      return { ...state, loading: true };
    case GET_CONSUMABLE_LIST_SUCCESS:
      console.log('SUCCESS');
      return {
        ...state,
        loading: false,
        consumableList: action.payload.data,
      };
    case GET_CONSUMABLE_LIST_FAIL:
      console.log('FAIL');
      return {
        ...state,
        loading: false,
        error: 'GET_CONSUMABLES_FAIL',
      };
    default:
      return state;
  }
}

export function getConsumables() {
  return {
    type: GET_CONSUMABLE_LIST,
    payload: {
      request: {
        url: '/ingredient',
      },
    },
  };
}
