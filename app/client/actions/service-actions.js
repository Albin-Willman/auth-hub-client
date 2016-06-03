export const ADD_SERVICE = '@services@addService';
export const REMOVE_SERVICE = '@services@removeService';
export const RESET_SERVICES = '@services@resetServices';
export const SET_LOADING    = '@services@setLoading';

export function resetServices() {
  return {
    type: RESET_SERVICES,
    payload: {}
  };
}

export function removeService(val) {
  return {
    type: REMOVE_SERVICE,
    payload: {
      label: val
    }
  };
}

export function addService(val) {
  return {
    type: ADD_SERVICE,
    payload: val
  };
}

export function setLoading(val) {
  return {
    type: SET_LOADING,
    payload: val
  };
}
