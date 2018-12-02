const GET_TESTI = 'windit/testi/LOAD';
const GET_SUCCESS = 'windit/testi/LOAD_SUCCESS';
const GET_TESTI_FAIL = 'windit/testi/LOAD_FAIL';

export default function reducer(state = { testiString: '' }, action) {
  switch (action.type) {
    case GET_TESTI:
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
