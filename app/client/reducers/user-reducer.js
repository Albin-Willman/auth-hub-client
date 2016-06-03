import {
  SET_USERNAME,
  SET_PASSWORD,
  SET_LOGGEDIN,
  RESET_USER
} from 'actions/user-actions';

export const initialState = {
  username: '',
  password: '',
  loggedin: false,
  token:    ''
};

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USERNAME:
      return { ...state,
        username: action.payload
      };
    case SET_PASSWORD:
      return { ...state,
        password: action.payload
      };
    case SET_LOGGEDIN:
      return { ...state,
        id: action.payload.userId,
        token: action.payload.token
      };
    case RESET_USER:
      return initialState;
    default:
      return state;
  }
}
