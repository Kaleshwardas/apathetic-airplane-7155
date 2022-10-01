function reducer(state, action) {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return { ...state, isAuth: true };
    case "GOING_lOGIN_PAGE":
      return { ...state, login: true };
    case "GOING_HOME_PAGE":
      return { ...state, login: false };
    case "TOGGLE_BOTTOM_PAGE":
      return { ...state, wSize: action.payload };
    default:
      return state;
  }
}


export default reducer;
