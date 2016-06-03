export const SET_USERNAME = '@user@setUsername';
export const SET_PASSWORD = '@user@setPassword';
export const SET_LOGGEDIN = '@user@setLoggedin';
export const RESET_USER   = '@user@resetUser';

export function setUsername(val) {
  return {
    type: SET_USERNAME,
    payload: val
  };
}

export function resetUser() {
  return {
    type: RESET_USER
  };
}

export function setPassword(val) {
  return {
    type: SET_PASSWORD,
    payload: val
  };
}

export function setLoggedin(userId, token) {
  return {
    type: SET_LOGGEDIN,
    payload: {
      token: token,
      userId: userId
    }
  };
}
