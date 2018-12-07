const GET_TESTI = 'windit-front/testi/LOAD';
const GET_SUCCESS = 'windit-front/testi/LOAD_SUCCESS';
const GET_TESTI_FAIL = 'windit-front/testi/LOAD_FAIL';

export default function testi(state = { testiString: '' }, action) {
  switch (action.type) {
    case GET_TESTI:
      console.log('GET_TESTI called');
      return { ...state, loading: true };
    case GET_SUCCESS:
      console.log('SUCCESS' + action.payload.data.text);
      return {
        ...state,
        loading: false,
        testiString: action.payload.data.text,
      };
    case GET_TESTI_FAIL:
      console.log('FAIL');
      return {
        ...state,
        loading: false,
        error: 'ERRORRORORR',
      };
    default:
      return state;
  }
}

export function getTeksti() {
  return {
    type: GET_TESTI,
    payload: {
      request: {
        url: '/test',
      },
    },
  };
}
