
  export const LoginSuccess = (payload) => {
    return {
      type: "LOGIN_SUCCESS",
      payload
    };
  };
  export const goingLoginPage = (payload) => {
    return {
      type: "GOING_lOGIN_PAGE",
      payload
    };
  };
  export const goingHomePage = (payload) => {
    return {
      type: "GOING_HOME_PAGE",
      payload
    };
  };
  export const ToggleBottomNav = (payload) => {
    return {
      type: "TOGGLE_BOTTOM_PAGE",
      payload
    };
  };
  