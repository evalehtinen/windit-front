const GET_CONSUMABLE_LIST = 'windit-front/consumableList/LOAD';
const GET_CONSUMABLE_LIST_SUCCESS = 'windit-front/consumableList/LOAD_SUCCESS';
const GET_CONSUMABLE_LIST_FAIL = 'windit-front/consumableList/LOAD_FAIL';
const SET_CONSUMABLE_LIST_FILTERED = 'windit-front/consumableList/SET_FILTERED';

export default function consumableList(
  state = { consumableList: [], consumableListFiltered: [] }, action,
) {
  switch (action.type) {
    case GET_CONSUMABLE_LIST:
      console.log('Get consumables list called');
      return { ...state, loading: true };
    case GET_CONSUMABLE_LIST_SUCCESS:
      console.log('Get consumables list SUCCESS');
      return {
        ...state,
        loading: false,
        consumableList: action.payload.data,
        consumableListFiltered: action.payload.data,
      };
    case GET_CONSUMABLE_LIST_FAIL:
      console.log('Get consumables list FAIL');
      return {
        ...state,
        loading: false,
        error: 'GET_CONSUMABLES_FAIL',
      };
    case SET_CONSUMABLE_LIST_FILTERED:
      return {
        ...state,
        consumableListFiltered: action.listFiltered,
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

export const setConsumableListFiltered = listFiltered => ({
  type: SET_CONSUMABLE_LIST_FILTERED,
  listFiltered,
});
