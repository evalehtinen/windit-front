const SET_USER = 'windit/user/USER_ID';

export default function user(state = { user: {} }, action) {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.value,
      };
    default:
      return state;
  }
}

export const setUser = value => ({
  type: SET_USER,
  value,
});
