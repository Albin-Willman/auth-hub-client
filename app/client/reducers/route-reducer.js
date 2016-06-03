import {
  SET_ROUTE
} from 'actions/route-actions';

export const initialState = {
  currentPage: '/'
};

export function routeReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ROUTE:
      return { ...state,
        currentPage: action.payload
      };
    default:
      return state;
  }
}
