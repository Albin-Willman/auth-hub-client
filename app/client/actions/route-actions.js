export const SET_ROUTE = '@routess@setRoute';

export function setRoute(val) {
  return {
    type: SET_ROUTE,
    payload: val
  };
}
