import {
  ADD_SERVICE,
  REMOVE_SERVICE,
  RESET_SERVICES,
  SET_LOADING
} from 'actions/service-actions';

export const initialState = {
  services: [],
  loading: false
};

export function servicesReducer(state = initialState, action) {
  switch (action.type) {
    case SET_LOADING:
      return { ...state,
        loading: action.payload
      };
    case ADD_SERVICE:
      return { ...state,
        services: state.services.concat([action.payload])
      };
    case REMOVE_SERVICE:
      return { ...state,
        services: state.services.filter(function (el) {
          return el.label !== action.payload.label;
        })
      };
    case RESET_SERVICES:
      return initialState;
    default:
      return state;
  }
}
